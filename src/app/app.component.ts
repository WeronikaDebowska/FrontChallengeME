import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.router.navigate(['/challenges']);
    // if (this.auth.isAuthenticated()) {     //TODO if/else instead of navigating to challenges directly
    //   this.router.navigate(['/challenges']);
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }
}
