import { TestBed } from '@angular/core/testing';

import { StatussrvcService } from './statussrvc.service';

describe('StatussrvcService', () => {
  let service: StatussrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatussrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
