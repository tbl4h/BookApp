import { TestBed } from '@angular/core/testing';

import { StartingValueService } from './starting-value.service';

describe('StartingValueService', () => {
  let service: StartingValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartingValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
