import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { LoginComponent } from './components/_core/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CharacterComponent } from './components/character/character.component';
import { CharacterService } from './services/character.service';
import { HttpModule } from '@angular/http';


//Routes
const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'login'}
  },
  { 
    path: 'character',
    component: CharacterComponent,
    data: {title: 'character'},
    canActivate: [AuthGuardService]
  },
  { path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CharacterComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    ),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    FirebaseService,
    AuthService,
    AuthGuardService,
    CharacterService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
