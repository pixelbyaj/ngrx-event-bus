import { TestBed } from '@angular/core/testing';

import { NgRxEventBusService } from './ngrx-event-bus.service';

describe('NgRxEventBusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgRxEventBusService = TestBed.get(NgRxEventBusService);
    expect(service).toBeTruthy();
  });
});
