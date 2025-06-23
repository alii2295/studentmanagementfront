import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-form',
  standalone: true,   // 👈 important
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  imports: [FormsModule,CommonModule]  // 👈 il faut importer FormsModule ici aussi
  
})
export class StudentFormComponent implements OnInit {

  student: Student = {
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  };

  isEditMode = false;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.studentService.getStudent(+id).subscribe(data => {
        this.student = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.studentService.updateStudent(this.student.id!, this.student).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.studentService.createStudent(this.student).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
