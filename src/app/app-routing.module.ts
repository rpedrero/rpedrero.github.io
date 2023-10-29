import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoViewComponent } from "./todo-view/todo-view.component";
import {TodoCreateComponent} from "./todo-create/todo-create.component";

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'todo/create', component: TodoCreateComponent },
  { path: 'todo/:id', component: TodoViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
