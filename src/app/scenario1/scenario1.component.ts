import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario1',
  template: `<div>
  <h2>Enter email</h2>
  <input #myInput type = 'text'>
  <button (click) = "logMessage(myInput.value)">Log in</button>
  </div>`,
  styles: []
})
export class Scenario1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    logMessage(value){
    console.log(value);
  }

}
