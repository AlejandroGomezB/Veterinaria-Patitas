/// <reference types="@angular/localize" />

import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';


  bootstrapApplication(AppComponent, {
    providers:[provideRouter(routes),provideHttpClient()]
  })
  .catch((err) => console.error(err));