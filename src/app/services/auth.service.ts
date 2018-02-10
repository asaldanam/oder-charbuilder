import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(
   public afAuth: AngularFireAuth
  ) { }

  login(email:string, password:string) {
    this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then(() => {
      console.log('login ok');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  signup(email:string, password:string) {
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(() => {
        console.log('registro ok')
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
