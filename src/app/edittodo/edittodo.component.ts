import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodomodelModule } from '../todomodel/todomodel.module';
import { NgModel, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  @Input() datas: TodomodelModule;
  @Output() itemSaved = new EventEmitter<TodomodelModule>();
  // @Input() hidden = true;
  constructor() { }

  saveItem(itemtodo: string, desc: string) {
    this.itemSaved.emit(new TodomodelModule (itemtodo, desc));
  }

  ngOnInit() {
  }

}
