import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExBindingComponent } from './ex-binding.component';

describe('ExBindingComponent', () => {
  let component: ExBindingComponent;
  let fixture: ComponentFixture<ExBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
