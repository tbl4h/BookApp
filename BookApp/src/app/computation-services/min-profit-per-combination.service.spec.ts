import { TestBed } from '@angular/core/testing';

import { MinProfitPerCombinationService } from './min-profit-per-combination.service';

describe('MinProfitPerCombinationService', () => {
  let service: MinProfitPerCombinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinProfitPerCombinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
