import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-student-list',
  standalone: true, 
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
   imports: [FormsModule,CommonModule, MatPaginatorModule] // ✅ obligatoire pour mat-paginator
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  searchKeyword: string = '';
  totalElements = 0;
pageSize = 1;
currentPage = 0;


  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getPaginatedStudents(this.currentPage, this.pageSize).subscribe(data => {
      this.students = data.content;
      this.totalElements = data.totalElements;
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
  search() {
    if (this.searchKeyword.trim() === '') {
      this.loadStudents(); // recharge tous les étudiants si vide
    } else {
      this.studentService.searchStudents(this.searchKeyword).subscribe((data) => {
        this.students = data;
      });
    }
  }
  sort(column: string) {
    this.studentService.getSortedStudents(column).subscribe(data => {
      this.students = data;
    });
  }
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadStudents();
  }
  
  
  
}

