import { Observable } from 'rxjs';
import { Todo } from '../entity/todo';

export abstract class TodoServiceInterface {
  public abstract getTodos(): Observable<Todo[]>;
  public abstract getTodo(id: Number): Observable<Todo | undefined>;
  public abstract updateTodoStatus(todo: Todo): Observable<Todo>;
  public abstract createTodo(todo: Todo): Observable<Todo | undefined>;
}
