import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { CharacterService } from './character.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  constructor(
   private afAuth: AngularFireAuth,
   private router: Router,
   private _character: CharacterService,
   private _user: UserService
  ) {
  }

  login(email:string, password:string) {
    this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then(() => {
      console.log('login ok');
      this.router.navigate(['/list']);
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
  }

  signup(email:string, password:string, username:string) {
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(() => {
        console.log('registro ok');
        this.afAuth.authState.subscribe(
          resp => {
            console.log('caputar id ok');
            this._user.newUser(resp.email, username);
          }
        )
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => {
        console.log('logout ok')
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
