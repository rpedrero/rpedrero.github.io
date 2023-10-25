import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './todo-list/todo-list.component';
import {MatListModule} from "@angular/material/list";
import {TodoService} from "./todo.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TodoViewComponent } from './todo-view/todo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
