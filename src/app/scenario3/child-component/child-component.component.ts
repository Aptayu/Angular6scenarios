import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: '<h2>{{ParentData}}</h2>',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() public ParentData;
  constructor() { }

  ngOnInit() {
  }

}
