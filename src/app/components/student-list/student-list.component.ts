import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true, 
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
   imports: [FormsModule,CommonModule]
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.loadStudents();
      });
    }
  }

  editStudent(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  addStudent(): void {
    this.router.navigate(['/add']);
  }
}

