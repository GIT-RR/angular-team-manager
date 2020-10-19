import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  async getTasks(): Promise<Task[]> {
    return this.httpClient
      .get('http://localhost:4200/tasks')
      .toPromise()
      .then((res) => res as Task[])
      .catch((e) => {
        throw e;
      });
  }

  async addTask(task: Task): Promise<any> {
    return this.httpClient
      .post('http://localhost:4200/tasks/add', task)
      .toPromise()
      .then((res) => res)
      .catch((e) => {
        throw e;
      });
  }

  async updateTask(task: Task): Promise<any> {
    return this.httpClient
      .post('http://localhost:4200/tasks/update', task)
      .toPromise()
      .then((res) => res)
      .catch((e) => {
        throw e;
      });
  }
}
