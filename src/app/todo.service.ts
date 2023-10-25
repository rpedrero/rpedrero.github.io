import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Todo } from "./todo";
import { catchError, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = `${environment.apiUrl}todo/`;

  constructor(private httpClient: HttpClient) { }

  public getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Todo[]>('getTodos', []))
      );
  }

  public getTodo(id: Number): Observable<Todo | undefined> {
    return this.httpClient.get<Todo | undefined>(`${this.apiUrl}${id}`)
      .pipe(
        catchError(this.handleError<Todo | undefined>('getTodo', undefined))
      );
  }

  public updateTodoStatus(todo: Todo): Observable<Todo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      }),
    };

    return this.httpClient.patch<Todo>(`${this.apiUrl}${todo.id}`, { status: !todo.status }, httpOptions)
      .pipe(
        catchError(this.handleError<Todo>('checkTodo', todo))
      );
  }

  private handleError<T>(operationName: String = 'operation', result?: T) {
    return (error: any) => {
      console.log(error);

      return of(result as T);
    }
  }
}
