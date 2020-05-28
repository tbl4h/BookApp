import { TestBed } from '@angular/core/testing';

import { MinProbabilityPerCombinationService } from './min-probability-per-combination.service';

describe('MinProbabilityPerCombinationService', () => {
  let service: MinProbabilityPerCombinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinProbabilityPerCombinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
