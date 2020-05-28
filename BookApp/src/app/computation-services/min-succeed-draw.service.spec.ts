import { TestBed } from '@angular/core/testing';

import { MinSucceedDrawService } from './min-succeed-draw.service';

describe('MinSucceedDrawService', () => {
  let service: MinSucceedDrawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinSucceedDrawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
