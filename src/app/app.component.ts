import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-management-front';

  student = {
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  };

  isEditMode = false;

  onSubmit() {
    if (this.isEditMode) {
      console.log('Updating student:', this.student);
    } else {
      console.log('Adding student:', this.student);
    }
  }
}
