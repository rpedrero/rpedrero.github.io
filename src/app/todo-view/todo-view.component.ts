import {Component, OnInit} from '@angular/core';
import { Todo } from "../entity/todo";
import { ActivatedRoute } from "@angular/router";
import {TodoServiceInterface} from "../service/todo.service.interface";

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {
  todo: Todo | undefined;

  constructor(private todoService: TodoServiceInterface, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const todoId = Number(routeParams.get('id'));

    this.todoService.getTodo(todoId).subscribe(
        (response: Todo | undefined) => {
          this.todo = response;
        }
    );
  }

  onCheckboxStateChange(): void {
    if(this.todo !== undefined) {
      this.todoService.updateTodoStatus(this.todo).subscribe(
        (updatedTodo: Todo) => {
          (<Todo> this.todo).status = updatedTodo.status;
          (<Todo> this.todo).dateDone = updatedTodo.dateDone;
        }
      );
    }
  }
}
