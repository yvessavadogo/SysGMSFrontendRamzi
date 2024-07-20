import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualisteCreateComponent } from './mutualiste-create.component';

describe('MutualisteCreateComponent', () => {
  let component: MutualisteCreateComponent;
  let fixture: ComponentFixture<MutualisteCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualisteCreateComponent]
    });
    fixture = TestBed.createComponent(MutualisteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
