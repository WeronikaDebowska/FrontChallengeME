import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../services/api.service';
import {IUser} from '../shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(
    private api: ApiService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  login() {
    // TODO validate inputs in validation service
    const user: IUser = {
      userName: this.model.username,
      password: this.model.password
    };
    this.api.login(user)
      .subscribe(isValid => {
        if (isValid) {
          sessionStorage.setItem('token', btoa(user.userName + ':' + user.password));
          this.router.navigate(['/main']);
        } else {
          alert('Authentication failed.');
        }
      });
  }
}



