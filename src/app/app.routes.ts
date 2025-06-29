import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { AddStudentReactiveComponent } from './components/add-student-reactive/add-student-reactive.component';

export const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  },
  {
    path: 'add',
    component: StudentFormComponent
  },
  {
    path: 'edit/:id',
    component: StudentFormComponent
  },
  {
    path: 'add-student-reactive',
    component: AddStudentReactiveComponent // ✅ ajout correct ici
  },


  {
    path: '**',
    redirectTo: ''
  }
];
