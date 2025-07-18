import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ✅ Ajouté ici
import { ReactiveFormsModule } from '@angular/forms';





bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule,BrowserAnimationsModule,ReactiveFormsModule )
    // ✅ Import nécessaire pour Angular Material
  
    
  ]
  
});
