import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgRxEventBusModule } from 'ngrx-event-bus';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NgRxEventBusModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
