import { Component } from '@angular/core';
import {NgRxEventBusService,EmitEvent, IEvent} from 'ngrx-event-bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private eventBus: NgRxEventBusService) { }
  ngOnInit() {
    this.eventBus.on(BusEvents.CustomerChangeEvent, (cust: Customer) => {
      debugger;
      this.title = cust.name;
    });
  }
  title = "RXJS";
  selectCustomer(cust: Customer) {
    this.eventBus.emit(new EmitEvent(BusEvents.CustomerChangeEvent, cust));
  }
}
export class Customer {
  public name: any
}

export class BusEvents implements IEvent {
  public static CustomerChangeEvent: string = "CustomerChangeEvent";
}

