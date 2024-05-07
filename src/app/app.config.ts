import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";


import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      //AngularFirestoreModule
    ), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"tp-juego","appId":"1:1028510518303:web:2c07e7e8e14c2acccbd92a","databaseURL":"https://tp-juego-default-rtdb.firebaseio.com","storageBucket":"tp-juego.appspot.com","apiKey":"AIzaSyBU8hYJvc5VsT9mrKqv5XaFm1NP5qzD6X4","authDomain":"tp-juego.firebaseapp.com","messagingSenderId":"1028510518303"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))
  ]
};
