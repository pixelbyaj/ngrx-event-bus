import { IEvent } from './IEvent';

export class EmitEvent {
    constructor(public name: IEvent, public value?: any) {
    }
  }