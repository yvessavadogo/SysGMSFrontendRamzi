import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneAChargeListComponent } from './personne-a-charge-list.component';

describe('PersonneAChargeListComponent', () => {
  let component: PersonneAChargeListComponent;
  let fixture: ComponentFixture<PersonneAChargeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonneAChargeListComponent]
    });
    fixture = TestBed.createComponent(PersonneAChargeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
