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
import {REST_CONFIGURATION_TOKEN, TODO_CRUD_TOKEN, TODO_SERVICE_TOKEN} from "./configuration/tokens";
import {TodoMockCrud} from "./crud/todo.mock.crud";
import {TodoService} from "./service/todo.service";

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
    {provide: TODO_CRUD_TOKEN, useClass: TodoMockCrud},
    {provide: TODO_SERVICE_TOKEN, useClass: TodoService},
    /*
    //THIS IMPORT IS USELESS AS LONG WE USE THE MOCKED CRUD (TodoMockCrud) INSTEAD OF THE REST-BASED ONE (TodoRestCrud)
    {provide: REST_CONFIGURATION_TOKEN, useValue: {

        apiUrl: environment.apiUrl,
        todoResourceUri: 'todo'
    }}*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
