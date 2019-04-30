import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ApiService} from '../services/api.service';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {IChallenge} from '../shared/interfaces';

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
      this.loadChallenges(userId);
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

  loadChallenges(id: string): void {
    this.api.getUserChallenges(id).subscribe((challenges: IChallenge []) => {
        console.log(challenges);
        this.user.setChallenges(challenges);
      },
      err => {
        // Todo info could not load challenges
        this.api.handleError(err);
      });
  }
}
