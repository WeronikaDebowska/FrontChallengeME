import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../services/api.service';
import {ILoginData} from '../shared/interfaces';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(
    private api: ApiService,
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
  }

  login() {
    // TODO validate inputs in validation service
    const loginData: ILoginData = {
      userName: this.model.username,
      password: this.model.password
    };
    this.api.login(loginData)
      .subscribe(isValid => {
        if (isValid) {
          this.auth.setToken(btoa(loginData.userName + ':' + loginData.password));
          this.router.navigate(['/main']);
        } else {
          alert('Authentication failed.');
        }
      });
  }
}



