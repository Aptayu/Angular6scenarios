import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5',
  templateUrl: './scenario5.component.html',
  styleUrls: ['./scenario5.component.css']
})
export class Scenario5Component implements OnInit {

  @Output() public parentEvent = new EventEmitter;


  constructor() { }

  ngOnInit() {
  }
  fireEvent(email){
    this.parentEvent.emit(email)
  }

}
