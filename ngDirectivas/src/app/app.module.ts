import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleAttrComponent } from './components/example-attr/example-attr.component';
import { ExampleStructComponent } from './components/example-struct/example-struct.component';
import { ExampleLifeCycleComponent } from './components/example-life-cycle/example-life-cycle.component';
import { AttrDirective } from './directives/attr.directive';
import { StructDirective } from './directives/struct.directive';
import { LifecycleDirective } from './directives/lifecycle.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExampleAttrComponent,
    ExampleStructComponent,
    ExampleLifeCycleComponent,
    AttrDirective,
    StructDirective,
    LifecycleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
