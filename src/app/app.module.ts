import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3Component } from './scenario3/scenario3.component';
import { ChildComponentComponent } from './scenario3/child-component/child-component.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { Scenario5Component } from './scenario5/scenario5.component';
import { ChildScenario5Component } from './scenario5/child-scenario5/child-scenario5.component';
import { Scenario6Component } from './scenario6/scenario6.component';
import { Sibling1Component } from './scenario6/sibling1/sibling1.component';
import { Sibling2Component } from './scenario6/sibling2/sibling2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    ChildComponentComponent,
    Scenario4Component,
    Scenario5Component,
    ChildScenario5Component,
    Scenario6Component,
    Sibling1Component,
    Sibling2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
