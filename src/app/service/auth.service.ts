import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
    this.login();
  }

  login(){
    let user = {
      email: 'vbapp1@gmail.com',
      password: 'a123456'
    };

    this.afAuth.auth.signInWithEmailAndPassword(
      user.email,
      user.password
    );
  }

  logOut(){
    this.afAuth.auth.signOut();
  }

}
