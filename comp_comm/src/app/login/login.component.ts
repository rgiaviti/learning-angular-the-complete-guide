import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: any = { username: "", password: ""}

  constructor(private loginService: LoginService) {}

  onLogin() {
    this.loginService.doLogin(this.credentials.username, this.credentials.password);
  }

  onLogout() {
    this.loginService.doLogout();
  }
}
