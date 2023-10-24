import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo.service";
import { Todo } from "../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] | undefined;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      (response: Todo[]) => {
        this.todos = response;
        console.log('Todos retrieved');
      }
    );
  }

  onCheckboxStateChange(todo: Todo): void {
    this.todoService.updateTodoStatus(todo).subscribe(
      (updatedTodo: Todo) => {
        todo.status = updatedTodo.status
      }
    );
  }
}
