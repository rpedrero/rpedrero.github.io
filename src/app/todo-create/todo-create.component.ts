import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TodoService } from "../todo.service";
import { Router } from "@angular/router";
import { Todo } from "../todo";

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent {
  todoForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('')
  });

  constructor(private todoService: TodoService, private router: Router) {}

  onSubmit(): void {
    if(this.todoForm.valid) {
      let todo: Todo = this.todoForm.value;
      todo.status = false;

      this.todoService.createTodo(todo).subscribe(
        (response: Todo | undefined) => {
          this.router.navigate(['/todo']);
      });
    }
  }
}
