import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
