import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  constructor(
    public user: UserService
  ) {
  }

  ngOnInit() {
  }

}
