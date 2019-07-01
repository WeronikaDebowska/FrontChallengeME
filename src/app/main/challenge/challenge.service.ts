import {Injectable} from '@angular/core';
import {IChallenge, IExercise, IParticipant} from '../../shared/interfaces';
import {UserService} from '../../services/user.service';
import {ApiService} from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  challengeDetails: IChallenge;
  executions: { [key: number]: { [key: number]: number } };     // TODO everything works but seems like executions have different structure

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

  loadExecutions(): void {
    this.apiService.getExecutionsForChallenge(this.user.id, this.challengeDetails.challengeId)
      .subscribe((executions: { [key: number]: { [key: number]: number } }) => {
          this.executions = executions;
        },
        err => {
          this.apiService.handleError(err);
        });
  }

  setStatus(status: boolean): void {
    this.challengeDetails.status = status;
  }

  saveExecution(exerId: string, date: string, repeats: string): void {
    const userId = this.user.id;
    const challId = this.challengeDetails.challengeId;
    this.apiService.saveExecution(userId, challId, exerId, date, repeats).subscribe();

  }
}
