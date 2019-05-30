import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChallengeService} from './challenge.service';
import {TimestampService} from '../../services/timestamp.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  id: string;
  url: string;
  statusMessage: string;

  constructor(
    private route: ActivatedRoute,
    private challengeService: ChallengeService,
    private timestamp: TimestampService
  ) {
  }

  ngOnInit() {

    this.getIdFromParams();
    this.url = `/challenge/${this.id}`;
    this.challengeService.loadChallengeDetails(this.id);
    this.setStatus();

    console.log(this.challengeService.challengeDetails);
  }

  getIdFromParams(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  setStatus(): void {
    const hasStarted = this.timestamp.isBefore(this.challengeService.challengeDetails.start);
    const hasFinished = this.timestamp.isBefore(this.challengeService.challengeDetails.finish);
    this.challengeService.setStatus(true);
    if (hasFinished) {
      this.statusMessage = 'FINISHED';
    }
    if (!hasStarted) {
      this.statusMessage = 'EXPECTED';
    }
    this.challengeService.setStatus(true);
    this.statusMessage = 'ACTIVE';
  }
}
