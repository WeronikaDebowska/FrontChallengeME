import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ApiService} from '../services/api.service';
import {AuthService} from '../services/auth.service';
import {User} from '../shared/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: User;

  constructor(
    private api: ApiService,
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    let username;
    try {
      username = this.auth.getNameFromToken();
    } catch (err) {
      this.logout();
    }
    // console.log('username: ' + username);
    // username && this.api.getUserData(username).subscribe(principal => {
    //     this.user = new User(principal);
    //   },
    //   error => {
    //     console.log('Authenticate error: ' + error.status);
    //     this.logout();
    //   });
  }

  logout() {
    this.auth.clearToken();
    this.router.navigate(['/login']);
  }
}
