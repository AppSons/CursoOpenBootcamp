import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAttrComponent } from './example-attr.component';

describe('ExampleAttrComponent', () => {
  let component: ExampleAttrComponent;
  let fixture: ComponentFixture<ExampleAttrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAttrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
