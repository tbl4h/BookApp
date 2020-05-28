import { TestBed } from '@angular/core/testing';

import { WholeBudgetService } from './whole-budget.service';

describe('WholeBudgetService', () => {
  let service: WholeBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WholeBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
