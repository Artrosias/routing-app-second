import { TestBed } from '@angular/core/testing';

import { NumericService } from './numeric.service';

describe('NumericService', () => {
  let service: NumericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
