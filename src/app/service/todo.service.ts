import {TodoServiceInterface} from './todo.service.interface';
import {CrudInterface} from "../crud/crud.interface";
import {Todo} from "../entity/todo";
import {catchError, Observable, of} from "rxjs";
import {Inject, Injectable} from "@angular/core";
import {TODO_CRUD_TOKEN} from "../configuration/tokens";

@Injectable()
export class TodoService implements TodoServiceInterface {
  constructor(@Inject(TODO_CRUD_TOKEN) private todoCrud: CrudInterface<Todo>) {

  }

  public getTodos(): Observable<Todo[]> {
    return this.todoCrud.getAll().pipe(
      catchError(this.handleError<Todo[]>('getTodos', undefined))
    );
  }

  public getTodo(id: Number): Observable<Todo | undefined> {
    return this.todoCrud.get(id).pipe(
      catchError(this.handleError<Todo>('getTodo', undefined))
    );
  }

  public updateTodoStatus(todo: Todo): Observable<Todo> {
    todo.status = !todo.status;
    todo.dateDone = (todo.status) ? new Date() : null;

    return this.todoCrud.update(todo).pipe(
      catchError(this.handleError<Todo>('updateTodoStatus', undefined))
    );
  }

  public createTodo(todo: Todo): Observable<Todo | undefined> {
    return this.todoCrud.create(todo).pipe(
        catchError(this.handleError<Todo>('createTodo', undefined))
      );
  }

  private handleError<T>(operationName: String = 'operation', result?: T) {
    return (error: any) => {
      console.error(error);

      return of(result as T);
    }
  }
}
