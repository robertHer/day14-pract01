import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'childcomponent',
  template: `
  <h2>{{title}}</h2>
  `,
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  @Input() title:string;
//  @Input() passedtext:string;


  constructor() { }

  ngOnInit() {
  }

}
