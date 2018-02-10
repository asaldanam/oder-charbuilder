import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(
    public _auth: AuthService,
    public fb: FormBuilder,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
  }

  canActivate() {
    return this.afAuth.authState
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      });
  }

  login() {
    this.afAuth.auth
      .signInAndRetrieveDataWithEmailAndPassword(this.credentials.value.email, this.credentials.value.password);
  }

  signup() {
    this.afAuth.auth
      .createUserAndRetrieveDataWithEmailAndPassword(this.credentials.value.email, this.credentials.value.password);
  }
  
  logout() {
    this.afAuth.auth
      .signOut();
  }

  ngOnInit() {
  }

}
