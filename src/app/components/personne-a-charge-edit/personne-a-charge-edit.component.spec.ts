import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneAChargeFormComponent } from './personne-a-charge-form.component';

describe('PersonneAChargeFormComponent', () => {
  let component: PersonneAChargeFormComponent;
  let fixture: ComponentFixture<PersonneAChargeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonneAChargeFormComponent]
    });
    fixture = TestBed.createComponent(PersonneAChargeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
