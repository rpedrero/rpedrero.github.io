import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatListModule } from "@angular/material/list";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {REST_CONFIGURATION_TOKEN, TodoCrudFactory} from "./configuration/configuration";
import {TodoService} from "./service/todo.service";
import {CrudInterface} from "./crud/crud.interface";
import {Todo} from "./entity/todo";
import {TodoServiceInterface} from "./service/todo.service.interface";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoViewComponent,
    TodoCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [
    {
      provide: REST_CONFIGURATION_TOKEN,
      useValue: {
        apiUrl: environment.apiUrl,
        todoResourceUri: 'todo',
      }
    },
    {provide: CrudInterface<Todo>, useFactory: TodoCrudFactory, deps: [HttpClient, REST_CONFIGURATION_TOKEN]},
    {provide: TodoServiceInterface, useClass: TodoService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
