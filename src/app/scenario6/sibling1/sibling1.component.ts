import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  template: `<div>
  <span> Enter email in sibling 1</span>
  <input type=”text” [(ngModel)]="email"><button (click) = fireEvent(email)>send</button>
  </div>`,
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  
  @Output() public childEvent = new EventEmitter;
  fireEvent(email){this.childEvent.emit(email)}
  constructor() { }

  ngOnInit() {
  }

}
