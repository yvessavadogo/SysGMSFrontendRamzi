import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneAChargeDetailComponent } from './personne-a-charge-detail.component';

describe('PersonneAChargeDetailComponent', () => {
  let component: PersonneAChargeDetailComponent;
  let fixture: ComponentFixture<PersonneAChargeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonneAChargeDetailComponent]
    });
    fixture = TestBed.createComponent(PersonneAChargeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
