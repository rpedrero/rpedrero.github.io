import {Component, OnInit} from '@angular/core';
import { Todo } from "../entity/todo";
import {TodoServiceInterface} from "../service/todo.service.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] | undefined;

  constructor(private todoService: TodoServiceInterface) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      (response: Todo[]) => {
        this.todos = response;

        this.todos.sort(TodoListComponent.orderTodos);
      }
    );
  }

  onCheckboxStateChange(todo: Todo): void {
    this.todoService.updateTodoStatus(todo).subscribe(
      (updatedTodo: Todo) => {
        todo.status = updatedTodo.status;
        todo.dateDone = updatedTodo.dateDone;

        this.todos?.sort(TodoListComponent.orderTodos);
      }
    );
  }

  private static orderTodos(a: Todo, b: Todo): 0 | -1 | 1 {
    if(a.status === b.status) {
      if(!a.status) {
        if(a.id === b.id) { //Should not happen, but we never can tell.
          return 0;
        }
        else if(a.id < b.id) {
          return 1;
        }
        else {
          return -1;
        }
      }
      else {
        if(a.dateDone === b.dateDone) {
          return 0;
        }
        else if(a.dateDone === null || (b.dateDone !== null &&a.dateDone < b.dateDone)) {
          return -1;
        }
        else {
          return 1;
        }
      }
    }
    else {
      return (!a.status) ? -1 : 1;
    }
  }
}
