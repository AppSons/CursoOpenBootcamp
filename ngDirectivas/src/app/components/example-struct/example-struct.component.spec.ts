import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleStructComponent } from './example-struct.component';

describe('ExampleStructComponent', () => {
  let component: ExampleStructComponent;
  let fixture: ComponentFixture<ExampleStructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleStructComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
