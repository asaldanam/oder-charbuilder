import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { CharacterService } from './character.service';

@Injectable()
export class AuthService {

  constructor(
   private afAuth: AngularFireAuth,
   private router: Router,
   private _character: CharacterService
  ) {
  }

  login(email:string, password:string) {
    this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then(() => {
      console.log('login ok');
      this.router.navigate(['/character']);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  signup(email:string, password:string) {
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(() => {
        console.log('registro ok');
        this._character.newCharacter(email);
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
