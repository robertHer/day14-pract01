import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'childcomponent',
  template: `
  <h2>{{title}}</h2> 

  <button (click)="notifyParent()">Click Me</button>
  `,
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  @Input() title:string;
//  @Input() passedtext:string;
@Output() notify = new EventEmitter<string>();
message:string = "this is a message";


  constructor() { }

  ngOnInit() {
  }
  notifyParent(){
    this.notify.emit(this.message);
  }
}
