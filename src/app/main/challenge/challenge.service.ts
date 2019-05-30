import {Injectable} from '@angular/core';
import {IChallenge} from '../../shared/interfaces';
import {UserService} from '../../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  challengeDetails: IChallenge;
  executions: any;
  participants: any;
  exercises: any;
  status: boolean;

  constructor(
    public user: UserService
  ) {
  }

  loadChallengeDetails(id: string): void {
    this.challengeDetails = this.user.challenges.find(challenge => challenge.challengeId === +id);
  }

  setStatus(status: boolean): void {
    this.status = status;
  }

}
