import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class TodomodelModule {
  public itemtodo: string;
  public desc: string;
  public hide: boolean;
  public hideedit = true;

  constructor(itemtodo: string, desc: string) {
    this.itemtodo = itemtodo;
    this.desc = desc;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }

  toggleedit() {
    this.hideedit = !this.hideedit;
  }
}
