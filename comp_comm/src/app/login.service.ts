import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginSubject : Subject<boolean>;

  constructor() {
    this.loginSubject = new Subject<boolean>();
  }

  doLogin(username:string, password: string) {
    if (username === "boba fett" && password === "jabba") {
      console.log("Credentials Correct")
      this.loginSubject.next(true)
    } else {
      console.log("Credentials Incorrect")
    }
  }

  doLogout() {
    console.log("Doing Logout")
    this.loginSubject.next(false)
  }

  observe(): Observable<boolean> {
    return this.loginSubject
  }
}
