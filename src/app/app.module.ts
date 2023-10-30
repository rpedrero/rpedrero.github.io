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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
