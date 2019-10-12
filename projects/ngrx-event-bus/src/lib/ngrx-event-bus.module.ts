import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRxEventBusService } from './services/ngrx-event-bus.service';



@NgModule({
  imports: [CommonModule],
  providers: [NgRxEventBusService]
})
export class NgRxEventBusModule { }
