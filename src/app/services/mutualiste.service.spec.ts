import { TestBed } from '@angular/core/testing';

import { MutualisteService } from './mutualiste.service';

describe('MutualisteService', () => {
  let service: MutualisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutualisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
