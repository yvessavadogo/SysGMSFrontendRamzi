import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssureListComponent } from './assure-list.component';

describe('AssureListComponent', () => {
  let component: AssureListComponent;
  let fixture: ComponentFixture<AssureListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssureListComponent]
    });
    fixture = TestBed.createComponent(AssureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
