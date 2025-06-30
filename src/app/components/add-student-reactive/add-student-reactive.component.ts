import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { Student } from '../../models/student';


@Component({
  selector: 'app-add-student-reactive',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './add-student-reactive.component.html',
  styleUrl: './add-student-reactive.component.css'
})
export class AddStudentReactiveComponent {

  studentForm!: FormGroup;
  selectedFile!: File;

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
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }


  onSubmit(): void {
    if (this.studentForm.invalid) return;

    const student: Student = this.studentForm.value;

    this.studentService.createStudent(student).subscribe(createdStudent => {
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);

        this.studentService.uploadPhoto(createdStudent.id!, formData).subscribe(() => {
          this.router.navigate(['/students']);
        });
      } else {
        this.router.navigate(['/students']);
      }
    });
  }
}


