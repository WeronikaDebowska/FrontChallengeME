import {Injectable} from '@angular/core';
import {IChallenge, IExercise, IParticipant} from '../../shared/interfaces';
import {UserService} from '../../services/user.service';
import {ApiService} from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  challengeDetails: IChallenge;

  constructor(
    public user: UserService,
    public apiService: ApiService,
  ) {
  }

  loadChallengeDetails(id: string): void {
    this.challengeDetails = this.user.challenges.find(challenge => challenge.challengeId === +id);
  }

  loadParticipants(): void {
    this.apiService.getPartocipantsForChallenge(this.challengeDetails.challengeId).subscribe((participants: IParticipant []) => {
        this.challengeDetails.participants = participants;
      },
      err => {
        this.apiService.handleError(err);
      });
  }

  loadExercises(): void {
    this.apiService.getExercisesForChallenge(this.challengeDetails.challengeId).subscribe((exercises: IExercise []) => {
        this.challengeDetails.exercises = exercises;
      },
      err => {
        this.apiService.handleError(err);
      });
  }

  setStatus(status: boolean): void {
    this.challengeDetails.status = status;
  }
}
