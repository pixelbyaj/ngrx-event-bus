# NgRxEventBus

Meditor Pattern based EventBus service mechanism as Angular service using RxJs. 
You can publish events to a bus and any component can subscribe the events. Subscribers of your event (event identification is being done using event-name as string). 

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## [Live Demo](https://angular-ngrxeventbus.stackblitz.io)
## How to consume
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

1. Install npm package ngrx-event-bus.

    ```console
    npm i ngrx-event-bus --save
    ```
2. Import Module
```typescript 
import {NgRxEventBusModule} from 'ngrx-event-bus';

@NgModule({
    ...
  imports:[NgRxEventBusModule ],
    ...
})

```

3. Register the events if you'd like to support events
```typescript
    //create Event class and inherit by IEvent
    export class BusEvents implements IEvent {
        public static TitleChangeEvent: string = "TitleChangeEvent";
    }

    import {NgRxEventBusService,EmitEvent, IEvent} from 'ngrx-event-bus';
    export class AppComponent  {
        constructor(private eventBus: NgRxEventBusService) { }
        title = "Demo";
        ngOnInit() {
            //Register Event Listner
            this.eventBus.on(BusEvents.TitleChangeEvent, (title: string) => {
                this.title = title;
            });
        }
    }
```
4. Publish Event if you'd like some one to subscribe
```typescript
    import { EmitEvent,NgRxEventBusService } from 'ngrx-event-bus';
    export class TitleComponent {
        constructor(private eventBus: NgRxEventBusService) { }
        textValue = '';
        onChangeTitle(title) {
            this.eventBus.emit(new EmitEvent(BusEvents.TitleChangeEvent, this.textValue));
        }
    }
```
## Thumb Rules
1. Event class should implements by IEvent.
2. Declare static string under Event Class.
  