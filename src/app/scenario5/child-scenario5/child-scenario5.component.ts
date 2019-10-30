import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-scenario5',
  template:`<div> 
            <span> lets send the mail to grandparent</span>
            <input [(ngModel)] = "email" type = text><button (click) = fireEvent(email)>send</button>
            </div>`,
  styleUrls: ['./child-scenario5.component.css']
})
export class ChildScenario5Component implements OnInit {

  @Output() public childEvent = new EventEmitter;
  constructor() { }
  public email = "";

  ngOnInit() {
  }
  fireEvent(email){
    this.childEvent.emit(email)
  }

}
