import { TestBed } from '@angular/core/testing';

import { ExpectedValueService } from './expected-value.service';

describe('ExpectedValueService', () => {
  let service: ExpectedValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpectedValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
