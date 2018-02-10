import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthGuardService } from '../../../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = this.fb.group({
    charId: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(
    public _auth: AuthService,
    public _authguard: AuthGuardService,
    public fb: FormBuilder,
    public afAuth: AngularFireAuth
  ) {
  }

  login() {
    let email = this.credentials.value.charId.toLowerCase() + '@odler.com';
    let pass = this.credentials.value.password;
    this._auth.login(email, pass);
  }

  signup() {
    let email = this.credentials.value.charId.toLowerCase() + '@odler.com';
    let pass = this.credentials.value.password;
    this._auth.signup(email, pass);
  }
  
  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
