import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
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
}
