import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  childTitle:string = 'text passed to child';
  // title = "i'm a nested component"
  constructor() { }

  ngOnInit() {
  }

}
