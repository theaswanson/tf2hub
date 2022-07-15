import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTf2Component } from './clean-tf2.component';

describe('CleanTf2Component', () => {
  let component: CleanTf2Component;
  let fixture: ComponentFixture<CleanTf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanTf2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanTf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
