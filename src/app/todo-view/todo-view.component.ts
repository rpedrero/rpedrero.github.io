import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {
  todo: Todo | undefined;

  constructor(private todoService: TodoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const todoId = Number(routeParams.get('id'));

    this.todoService.getTodo(todoId).subscribe(
        (response: Todo | undefined) => {
          this.todo = response;
        }
    );
  }

  getStatusString(): String {
    if(this.todo) {
      return (this.todo?.status) ? 'Done' : 'To do';
    }
    else {
      return "";
    }
  }
}
