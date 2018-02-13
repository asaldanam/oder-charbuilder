import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {

  private collection:string = 'users'
  private characters:any;

  constructor(
    private afs:AngularFirestore,
    private afAuth: AngularFireAuth,
    private router:Router
  ) { }

  getChars() {
    this.afAuth.authState.subscribe(resp => {
      this.characters = this.afs.collection('characters', ref => ref.where('user', '==', resp.email)).valueChanges();
    })
  }

  newUser(email:string, username:string) {
    this.afs.collection(this.collection).doc(email).set({
        username: username,
    })
    .then(() => {
      console.log('saved new user');
      this.router.navigate(['/list']);
    })
    .catch(() => {console.log('error saving new user')})
  }


}


