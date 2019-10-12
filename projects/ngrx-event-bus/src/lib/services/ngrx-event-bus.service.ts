import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IEvent } from '../interface/IEvent';
import { EmitEvent } from '../interface/Event';

@Injectable()
export class NgRxEventBusService {

  constructor() { }

  private subject$ = new Subject();

  on(event: IEvent, action: any): Subscription {
    return this.subject$
      .pipe(
        filter((e: EmitEvent) => {
          return e.name === event;
        }),
        map((e: EmitEvent) => {
          return e.value;
        })
      )
      .subscribe(action);
  }

  emit(event: EmitEvent) {
    this.subject$.next(event);
  }
}


