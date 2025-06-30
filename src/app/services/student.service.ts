
  import { Injectable } from '@angular/core';
  import { HttpClient,HttpParams } from '@angular/common/http';
  import { Student } from '../models/student';
  import { Observable } from 'rxjs';
  
  
  @Injectable({
    providedIn: 'root'
  })
  export class StudentService {
    private apiUrl = 'http://localhost:8085/api/students';
  
    constructor(private http: HttpClient) {}
  
    getStudents(): Observable<Student[]> {
      return this.http.get<Student[]>(this.apiUrl);
    }
  
    getStudent(id: number): Observable<Student> {
      return this.http.get<Student>(`${this.apiUrl}/${id}`);
    }
  
    createStudent(student: Student): Observable<Student> {
      return this.http.post<Student>(this.apiUrl, student);
    }
  
    updateStudent(id: number, student: Student): Observable<Student> {
      return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
    }
  
    deleteStudent(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
    searchStudents(keyword: string): Observable<Student[]> {
      return this.http.get<Student[]>(`${this.apiUrl}/search?keyword=${keyword}`);
    }
    getSortedStudents(sortBy: string): Observable<Student[]> {
      return this.http.get<Student[]>(`${this.apiUrl}/sorted?sortBy=${sortBy}`);
    }
    getPaginatedStudents(page: number, size: number): Observable<any> {
      const params = new HttpParams().set('page', page).set('size', size);
      return this.http.get<any>(`${this.apiUrl}/paginated`, { params });
    }
    uploadPhoto(id: number, formData: FormData): Observable<any> {
      return this.http.post(`${this.apiUrl}/upload-photo/${id}`, formData);
    }
  
    getPhotoUrl(filename: string): string {
      return `${this.apiUrl}/photo/${filename}`;
    }
  }
    