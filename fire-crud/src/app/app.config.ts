import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crud-9f771","appId":"1:924089060004:web:27a79247a6f8c22a857431","storageBucket":"simple-crud-9f771.appspot.com","apiKey":"AIzaSyCSOVNPYDAXsCAcNnsjevE6ZfjSGsmACjM","authDomain":"simple-crud-9f771.firebaseapp.com","messagingSenderId":"924089060004"}))), importProvidersFrom(provideAuth(() => getAuth()))]
};
