import { TestBed } from '@angular/core/testing';

import { ComputationServiceService } from './computation-service.service';

describe('ComputationServiceService', () => {
  let service: ComputationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
