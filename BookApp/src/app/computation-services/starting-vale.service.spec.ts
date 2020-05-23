import { TestBed } from '@angular/core/testing';

import { StartingValeService } from './starting-vale.service';

describe('StartingValeService', () => {
  let service: StartingValeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartingValeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
