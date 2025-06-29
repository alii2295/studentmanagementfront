import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentReactiveComponent } from './add-student-reactive.component';

describe('AddStudentReactiveComponent', () => {
  let component: AddStudentReactiveComponent;
  let fixture: ComponentFixture<AddStudentReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStudentReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddStudentReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
