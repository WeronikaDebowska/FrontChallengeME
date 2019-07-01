import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChallengeService} from './challenge.service';
import {TimestampService} from '../../services/timestamp.service';

// import {ChallengesComponent} from '../challenges/challenges.component';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  id: string;
  url: string;
  statusMessage: string;

  // @Input() challengeStatus: string;


  constructor(
    private route: ActivatedRoute,
    private challengeService: ChallengeService,
    private timestamp: TimestampService,
    // private challehgesComponent: ChallengesComponent
  ) {
  }

  ngOnInit() {

    this.getIdFromParams();
    this.url = `/challenge/${this.id}`;
    this.challengeService.loadChallengeDetails(this.id);
    this.setChallengeStatus();
    // this.setChallengeStatus();
    this.setStatus();
    this.challengeService.loadExecutions();
    this.challengeService.loadExercises();
  }

  getIdFromParams(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }


  setStatus(): void {
    const hasStarted = this.timestamp.isBefore(this.challengeService.challengeDetails.start);
    const hasFinished = this.timestamp.isBefore(this.challengeService.challengeDetails.finish);
    console.log(hasStarted);
    console.log(hasFinished);
    this.challengeService.setStatus(true);
    if (hasFinished) {
      this.statusMessage = 'FINISHED';
    } else if (!hasStarted) {
      this.statusMessage = 'EXPECTED';
    } else {
      this.challengeService.setStatus(true);
      this.statusMessage = 'ACTIVE';
    }
  }


  setChallengeStatus(): void {
    // this.challengesComponent.setChallengeStatus(this.id);

  }
}
