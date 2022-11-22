import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLifeCycleComponent } from './example-life-cycle.component';

describe('ExampleLifeCycleComponent', () => {
  let component: ExampleLifeCycleComponent;
  let fixture: ComponentFixture<ExampleLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleLifeCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
