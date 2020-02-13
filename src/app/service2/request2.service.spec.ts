import { TestBed } from '@angular/core/testing';

import { Request2Service } from './request2.service';

describe('Request2Service', () => {
  let service: Request2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Request2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
