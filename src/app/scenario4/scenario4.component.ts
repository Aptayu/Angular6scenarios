import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4',
  template: '<button (click) = "fireEvent()">SendEvent</button>',
 
})
export class Scenario4Component implements OnInit {

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Hey this is scenario4')
  }

}
