import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualisteListComponent } from './mutualiste-list.component';

describe('MutualisteListComponent', () => {
  let component: MutualisteListComponent;
  let fixture: ComponentFixture<MutualisteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualisteListComponent]
    });
    fixture = TestBed.createComponent(MutualisteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
