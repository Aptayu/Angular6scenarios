import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  template:  `
      <span> Recieved email in sibling2 </span>    
      {{email}}`,
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  
  @Input() public email;
  constructor() { }

  ngOnInit() {
  }

}
