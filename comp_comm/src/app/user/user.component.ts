import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  logged: boolean = false

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.observe().subscribe(
      (logged) => { this.logged = logged}
    );
  }
}
