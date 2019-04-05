import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../services/api.service';
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
    private router: Router
  ) {
  }

  ngOnInit() {
    this.api.authenticate().subscribe(principal => {
        this.user = new User(principal);
      },
      error => {
        console.log('Authenticate error: ' + error.status);
        this.router.navigate(['/login']);
      });
  }
}
