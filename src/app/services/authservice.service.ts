import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign up */
  async SignUp(email: string, password: string) {
    debugger;
    await this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        res.user?.sendEmailVerification();
        console.log('You are Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
 async SignIn(email: string, password: string):Promise<any> {
   return await this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password);   
  }

  /* Sign out */
 async SignOut() {
    await this.angularFireAuth
      .auth
      .signOut();
  }
}
