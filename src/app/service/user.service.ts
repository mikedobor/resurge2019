import { Injectable } from '@angular/core';
import { User } from './user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor() { }

  signUp() {
    console.log('Sign up');
  }

  signIn() {
    console.log('Sign in');
  }

  logOut() {
    console.log('Log Out');
  }
}
