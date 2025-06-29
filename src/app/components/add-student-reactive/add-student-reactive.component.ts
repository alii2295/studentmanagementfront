import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-student-reactive',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './add-student-reactive.component.html',
  styleUrl: './add-student-reactive.component.css'
})
export class AddStudentReactiveComponent {

  studentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.studentForm.invalid) return;

    this.studentService.createStudent(this.studentForm.value).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}


