import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodomodelModule } from '../todomodel/todomodel.module';


@Component({
  selector: 'app-createtodo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.css']
})
export class CreatetodoComponent implements OnInit {
  @Output() todoCreated = new EventEmitter<TodomodelModule>();
  message: string;
  messagevalue = true;

  createTodoComponent(todoitem: string, desc: string) {
    if (todoitem !== '') {
    this.todoCreated.emit(new TodomodelModule(todoitem, desc));
    this.messagevalue = true;
    } else { this.message = 'You have to enter an ToDo - Item'; this.messagevalue = false; }
  }

  constructor() { }

  ngOnInit() {
  }

}
