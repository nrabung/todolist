import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CreatetodoComponent } from './createtodo/createtodo.component';
import { EdittodoComponent } from './edittodo/edittodo.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodolistComponent,
    CreatetodoComponent,
    EdittodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
