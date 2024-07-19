import { TestBed } from '@angular/core/testing';

import { PersonneAChargeService } from './personne-a-charge.service';

describe('PersonneAChargeService', () => {
  let service: PersonneAChargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneAChargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
