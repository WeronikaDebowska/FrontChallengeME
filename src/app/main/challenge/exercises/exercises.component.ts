import {Component, OnInit} from '@angular/core';
import {ChallengeService} from '../challenge.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  constructor(
    public challengeService: ChallengeService
  ) {
  }

  ngOnInit() {
    if (!this.challengeService.challengeDetails.exercises) {
      this.challengeService.loadExercises();
    }
  }

}
