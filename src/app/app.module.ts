import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatListModule } from "@angular/material/list";
import { HttpClientModule } from "@angular/common/http";
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {REST_CONFIGURATION_TOKEN} from "./configuration/rest.configuration.interface";
import {TodoService} from "./service/todo.service";
import {CrudInterface} from "./crud/crud.interface";
import {Todo} from "./entity/todo";
import {TodoServiceInterface} from "./service/todo.service.interface";
import {environment} from "../environments/environment";
import {TodoMockCrud} from "./crud/todo.mock.crud";

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
    {provide: CrudInterface<Todo>, useClass: TodoMockCrud},
    {provide: TodoServiceInterface, useClass: TodoService},
    {
      provide: REST_CONFIGURATION_TOKEN,
      useValue: {
        apiUrl: environment.apiUrl,
        todoResourceUri: 'todo'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
