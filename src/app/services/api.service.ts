import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Todo } from '../models/todo';
import { User } from '../models/user';

const API_URL = environment.apiUrl;

@Injectable({ providedIn: "root" })
export class ApiService {
  constructor(private http: HttpClient) {}

  public signIn(username: string, password: string) {
    return this.http.post<User>(API_URL + "/sign-in", {
      email: username,
      password: password,
    });
  }

  public getAllTodos() {
    const options = this.getRequestOptions();
    return this.http.get<Todo[]>(API_URL + "/todos", options);
  }

  public createTodo(todo: Todo) {
    const options = this.getRequestOptions();
    return this.http.post<Todo>(API_URL + "/todos", todo, options);
  }

  public getTodoById(todoId: number) {
    const options = this.getRequestOptions();
    return this.http.get<Todo>(API_URL + "/todos/" + todoId, options);
  }

  public updateTodo(todo: Todo) {
    const options = this.getRequestOptions();
    return this.http.put<Todo>(API_URL + "/todos/" + todo.id, todo, options);
  }

  public deleteTodoById(todoId: number) {
    const options = this.getRequestOptions();
    return this.http.delete<{}>(API_URL + "/todos/" + todoId, options);
  }

  private getRequestOptions() {
    const headers = new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2l0ZVBvaW50IFJlYWRlciJ9.sS4aPcmnYfm3PQlTtH14az9CGjWkjnsDyG_1ats4yYg`,
    });
    return { headers };
  }
}
