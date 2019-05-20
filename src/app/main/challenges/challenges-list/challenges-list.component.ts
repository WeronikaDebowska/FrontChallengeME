import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../../shared/interfaces';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.css']
})
export class ChallengesListComponent implements OnInit {

  @Input() user: IUser;

  constructor() {
  }

  ngOnInit() {
  }

}
