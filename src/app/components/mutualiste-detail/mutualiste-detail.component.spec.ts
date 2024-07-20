import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualisteDetailComponent } from './mutualiste-detail.component';

describe('MutualisteDetailComponent', () => {
  let component: MutualisteDetailComponent;
  let fixture: ComponentFixture<MutualisteDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualisteDetailComponent]
    });
    fixture = TestBed.createComponent(MutualisteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
