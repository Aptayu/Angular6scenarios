import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
    <h2>
    welcome {{name}}
    </h2>
    <h2>{{22+3}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <input type="text" value="don">
    <input [id] = myId type="text" value="don"><br> 
    <input  disabled  id = {{myId}} type="text" value="don">
    <input  disabled = false  id = {{myId}} type="text" value="don">
    <input  [disabled] = isDisabled  id = {{myId}} type="text" value="don">
    <input  bind-disabled = !isDisabled  id = {{myId}} type="text" value="don">
    <h2 class = "text-success">I want to break free</h2>
    <h2 [class]="successClass">I want to break free</h2>
    <h2 class = "text-special" [class]="successClass">I want to break free</h2>
    <h2 [class.text-danger]="hasError">Mygod Daya</h2>
    <h2 [ngClass] = "messageClasses">I want to break free</h2>
    <h2 [style.color]="'orange'">I want to break free</h2>
    <h2 [style.color]="hasError ? 'red' : 'purple'">I want to break free</h2>
    <h2 [style.color]="highlightColor">Style me rhne ka</h2>
    <h2 [ngStyle] = "titleStyles">I want to break free</h2>
    <button (click) = "onClick($event)">Greet</button>
    <button (click) = "greeting = 'Welcome to hell'">Greet</button>
    {{greeting}} <br>
    <input #myInput type = 'text'>
    <button (click) = "logMessage(myInput.value)">Log</button>
    <input [(ngModel)] = "data" type = "text">
    {{data}}
    <div *ngIf = "displayname else elseBlock">
    <h2>Code</h2>
    </div>
    
    <ng-template #elseBlock>
      <h2>Hidden</h2>
    </ng-template>
    
    <div [ngSwitch] = "color">
      <div *ngSwitchCase = "'red'">You picked red</div>
      <div *ngSwitchCase = "'blue'">You picked blue</div>
      <div *ngSwitchCase = "'green'">You picked green</div>
      <div *ngSwitchDefault>Pick again</div>

    <div *ngFor="let color of rang;index as i">
      {{i}}{{color}}
    </div>
    <h2>{{n}}</h2>

    <button (click) = "fireEvent()">Send Event</button>

    `,
  styles: [`
    .text-success {
      color : green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {

  // @Input() public ParentData;
  @Input('ParentData') public n;
  @Output() public childEvent = new EventEmitter;
  public rang = ["green","yellow","blue","violet"];
  displayname = true;
  public color = "blue"; 
  public name = "gotcha";
  public myId = "NIIT";
  public isDisabled = false;
  public successClass = "text-success"; 
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "Violet";
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-special": this.isSpecial
  }
  public titleStyles ={
    color : "blue",
    fontStyle: "Italic"
  }
  public greeting = "";
  public data = "";


  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "Hello" + this.name
  }
  onClick(event){
    console.log(event);
    this.greeting = event.type;
  }
  logMessage(value){
    console.log(value);
  }
  fireEvent(){
    this.childEvent.emit('Hey ram')
  }
}
