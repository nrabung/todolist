import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodomodelModule } from '../todomodel/todomodel.module';

const key = 'todo';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos: TodomodelModule[];
  edit: TodomodelModule;
  time: any;
  todayDate: any;

  constructor() {

    this.time = new Date();
    const ref = setInterval((new Date()), 100);
    const getStorage = JSON.parse(localStorage.getItem(key));
    if (getStorage instanceof Array) {
    this.todos = getStorage.map((view) => (new TodomodelModule(view.itemtodo, view.desc)));
    } else {
      this.todos = [];
    }
   }

  ngOnInit() {
    this.todayDate = setInterval( () => {
                     this.todayDate = new Date();
                     }, 1000);
  }

  save() {
  const testarray = this.todos.map((todoitem) => ({itemtodo: todoitem.itemtodo, desc: todoitem.desc}));
  localStorage.setItem(key, JSON.stringify(testarray));
  }

  addItem(item) {
    this.todos.unshift(item);
    this.save();
  }

  deleteItem(todoitem) {
    this.todos.splice(todoitem, 1);
    this.save();
  }

  editItem(todoitem) {
    this.edit = todoitem;
  }

  saveItem(todoitem: TodomodelModule) {
    console.log(todoitem);
    this.edit = undefined;
    this.save();
  }
}
