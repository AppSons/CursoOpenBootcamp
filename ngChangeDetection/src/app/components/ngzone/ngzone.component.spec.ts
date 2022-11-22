import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzoneComponent } from './ngzone.component';

describe('NgzoneComponent', () => {
  let component: NgzoneComponent;
  let fixture: ComponentFixture<NgzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
