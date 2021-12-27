import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevProcessComponent } from './dev-process.component';

describe('DevProcessComponent', () => {
  let component: DevProcessComponent;
  let fixture: ComponentFixture<DevProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
