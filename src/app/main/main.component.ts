import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ApiService} from '../services/api.service';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public user: UserService,
    private api: ApiService,
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    const userId = this.auth.getUserId();
    if (userId) {
      this.setUserDetails();
    } else {
      this.logout();
    }
  }

  logout(): void {
    this.auth.clearToken();
    this.router.navigate(['/login']);
  }

  setUserDetails(): void {
    this.user.setUsername(this.auth.getUserName());
    this.user.setId(this.auth.getUserId());
  }
}
