import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPortalComponent } from './training-portal.component';

describe('TrainingPortalComponent', () => {
  let component: TrainingPortalComponent;
  let fixture: ComponentFixture<TrainingPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
