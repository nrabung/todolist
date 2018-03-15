import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TodolistComponent } from '../todolist/todolist.component';
import { CreatetodoComponent } from '../createtodo/createtodo.component';
import { TodomodelModule } from '../todomodel/todomodel.module';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() data: TodomodelModule;
  @Output() itemDeleted = new EventEmitter<TodomodelModule>();
  @Output() itemEdited = new EventEmitter<TodomodelModule>();

  deleteItem() {
    this.itemDeleted.emit(this.data);
  }

  editItem() {
    this.itemEdited.emit(this.data);
  }
}


