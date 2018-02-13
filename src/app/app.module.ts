import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CharacterComponent } from './pages/character/character.component';
import { CharacterService } from './services/character.service';
import { HttpModule } from '@angular/http';
import { CharListComponent } from './pages/char-list/char-list.component';
import { UserService } from './services/user.service';
import { NewCharacterComponent } from './pages/new-character/new-character.component';
import { ClassesService } from './services/classes.service';
import { EditorComponent } from './editor/editor.component';


// Routes
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, data: {title: 'login'} },
  { path: 'character', component: CharacterComponent, data: {title: 'character'}, canActivate: [AuthGuardService] },
  { path: 'list', component: CharListComponent, data: {title: 'list'}, canActivate: [AuthGuardService] },
  { path: 'list', component: CharListComponent, data: {title: 'list'}, canActivate: [AuthGuardService] },
  { path: 'new-character', component: NewCharacterComponent, data: {title: 'new-character'}, canActivate: [AuthGuardService] },
  { path: 'editor', component: EditorComponent, data: {title: 'editor'}, canActivate: [AuthGuardService] },
  // { path: '**',
  //   pathMatch: 'full',
  //   redirectTo: 'login'
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CharacterComponent,
    CharListComponent,
    NewCharacterComponent,
    EditorComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    ),
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    FirebaseService,
    AuthService,
    AuthGuardService,
    CharacterService,
    UserService,
    ClassesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
