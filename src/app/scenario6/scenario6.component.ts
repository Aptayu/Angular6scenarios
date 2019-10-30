import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario6',
  template: `
  {{email}}
  <app-sibling1 (childEvent)="email=$event"></app-sibling1>
  <app-sibling2 [email]="email"></app-sibling2>`
  ,
  styles: ['./scenario6.component.css']
})
export class Scenario6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
