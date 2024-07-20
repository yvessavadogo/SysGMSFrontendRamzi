import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualisteFormComponent } from './mutualiste-edit.component';

describe('MutualisteFormComponent', () => {
  let component: MutualisteFormComponent;
  let fixture: ComponentFixture<MutualisteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualisteFormComponent]
    });
    fixture = TestBed.createComponent(MutualisteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
