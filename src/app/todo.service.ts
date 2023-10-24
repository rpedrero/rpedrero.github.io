import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Todo } from "./todo";
import { catchError, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiServerUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.apiServerUrl}todo/`)
      .pipe(
        catchError(this.handleError<Todo[]>('getTodos', []))
      );
  }

  private handleError<T>(operationName: String = 'operation', result?: T) {
    return (error: any) => {
      console.log(error);

      return of(result as T);
    }
  }
}
