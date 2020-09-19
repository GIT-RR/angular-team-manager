import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as membersBE from './fixtures/members';
import { Member } from '../models/member';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>): Observable<HttpEvent<any>> {
    let body = null;

    if (request.method === 'GET') {
      // get all members
      if (request.url === 'http://localhost:4200/members') {
        body = membersBE.getAll();
      }

      // get one member
      if (request.url.includes('http://localhost:4200/members/')) {
        const splitted = request.url.split('/');
        const id = +splitted[splitted.length - 1];
        body = membersBE.get(id);
      }
    } else if (request.method === 'POST') {
      if (request.url.includes('http://localhost:4200/members/delete/')) {
        const splitted = request.url.split('/');
        const id = +splitted[splitted.length - 1];
        membersBE.remove(id);
      }

      if (request.url === 'http://localhost:4200/members/add') {
        membersBE.add(request.body as Member);
      }

      if (request.url === 'http://localhost:4200/members/update') {
        console.log(request.body);
        membersBE.update(request.body as Member);
      }
    }

    return of(new HttpResponse({ status: 200, body: body }));
  }
}
