import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALHGdcCQzzFeUyk9OMxnBmMvMSeM9W6Oc",
  authDomain: "sample-project-6f0fb.firebaseapp.com",
  projectId: "sample-project-6f0fb",
  storageBucket: "sample-project-6f0fb.appspot.com",
  messagingSenderId: "397556319645",
  appId: "1:397556319645:web:8c3017d9c2860722355b74"
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
