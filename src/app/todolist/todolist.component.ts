import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodomodelModule } from '../todomodel/todomodel.module';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos: TodomodelModule[];
  edit: TodomodelModule;

  constructor() {
    this.todos = [
      new TodomodelModule('ToDO für heute?', 'Philip schreiben'),
      new TodomodelModule('ToDo für morgen', 'Oma anrufen'),
      // new TodomodelModule('A kid threw a lump of cheddar at me', 'I thought ‘That’s not very mature’'),
    ];
   }

  ngOnInit() {
  }

  addItem(item) {
    this.todos.unshift(item);
  }

  deleteItem(todoitem) {
    this.todos.splice(todoitem, 1);
  }

  editItem(todoitem) {
    this.edit = todoitem;
  }
}
