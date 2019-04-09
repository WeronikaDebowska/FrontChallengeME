import {Component, OnInit} from '@angular/core';
import {ILoginData} from '../../shared/interfaces';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../login.component.css']
})
export class LoginFormComponent implements OnInit {

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
