import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyAwesomeLibModule } from 'my-awesome-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ BrowserModule, MyAwesomeLibModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
