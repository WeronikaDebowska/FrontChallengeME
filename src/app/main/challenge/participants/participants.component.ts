import {Component, OnInit} from '@angular/core';
import {ChallengeService} from '../challenge.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  constructor(
    public challengeService: ChallengeService) {
  }

  ngOnInit() {
  }

  round(value) {
    return Math.floor(value);
  }


}
