import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario2',
  template: `
  <div>
  <span> Email</span>
  <input type=”text” [(ngModel)]="email" />
  {{email}}
  </div>`,
  styles: []
})
export class Scenario2Component implements OnInit {

  public email = "";
  constructor() { }

  ngOnInit() {
  }

}
