import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../shared/user';

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

    const formData = new FormData();
    formData.append('username', this.model.username);
    formData.append('password', this.model.password);

    this.api.login(formData)
      .subscribe((response: User) => {
        console.log('username: ' + response.username);

        if (response.username) {
          // this.auth.setToken(btoa(loginData.username + ':' + loginData.password));
          // console.log('login rest: ' + response);
          this.router.navigate(['/main']);
        } else {
          alert('Authentication failed.');
        }
      });
  }

}
