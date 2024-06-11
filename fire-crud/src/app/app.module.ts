//ng new --no-standalone for module based application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqqYYpz2CbEKpYytrgPct6bGpWe2kXGTE",
  authDomain: "student-database-9ff56.firebaseapp.com",
  projectId: "student-database-9ff56",
  storageBucket: "student-database-9ff56.appspot.com",
  messagingSenderId: "76251320691",
  appId: "1:76251320691:web:1d50d824c813bbed497506"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
