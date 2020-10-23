import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {} // private messageService: MessageService // private http: HttpClient,

  async login(email: string, password: string): Promise<any> {
    return this.httpClient
      .post('http://localhost:4200/login', { email, password })
      .toPromise()
      .then((res) => res)
      .catch((e) => {
        throw e;
      });
  }
}
