import { TestBed } from '@angular/core/testing';

import { NgRomeService } from './ngrome.service';

describe('NgromeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgRomeService = TestBed.get(NgRomeService);
    expect(service).toBeTruthy();
  });
});
