import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as membersBE from '../fixtures/members';
import * as tasksBE from '../fixtures/tasks';
import * as authBE from '../fixtures/auth';
import { Member } from '../models/member';
import { Task } from '../models/task';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>): Observable<HttpEvent<any>> {
    let body = null;

    if (request.method === 'GET') {
      // MEMBERS
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

      // TASKS
      if (request.url === 'http://localhost:4200/tasks') {
        body = tasksBE.getAll();
      }
    } else if (request.method === 'POST') {
      // LOGIN
      if (request.url.includes('http://localhost:4200/login')) {
        const requestData = authBE.login(
          request.body['email'],
          request.body['password']
        );

        if (requestData) {
          body = requestData;
        } else {
          throw new Error('Invalid Credentials');
        }
      }

      // MEMBERS
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

      // TASKS
      if (request.url === 'http://localhost:4200/tasks/add') {
        tasksBE.add(request.body as Task);
      }

      if (request.url === 'http://localhost:4200/tasks/update') {
        console.log(request.body);
        tasksBE.update(request.body as Task);
      }
    }

    return of(new HttpResponse({ status: 200, body: body }));
  }
}
