import {Injectable} from '@angular/core';
import {IChallenge, IParticipant} from '../../shared/interfaces';
import {UserService} from '../../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  challengeDetails: IChallenge;
  executions: any;
  participants: IParticipant [];
  exercises: any;
  status: boolean;

  constructor(
    public user: UserService
  ) {
  }

  loadChallengeDetails(id: string): void {
    this.challengeDetails = this.user.challenges.find(challenge => challenge.challengeId === +id);

    this.participants = [
      {
        username: 'Snieżka',
        challengeRealisation: 120,
        challengeRole: 'host'
      },
      {
        username: 'Pocahontas Pocahontas',
        challengeRealisation: 23.5,
        challengeRole: 'participant'
      },
      {
        username: 'Ariel',
        challengeRealisation: 49.5776543,
        challengeRole: 'participant'
      },
      {
        username: 'a',
        challengeRealisation: 92.234,
        challengeRole: 'participant'
      },
    ];
  }

  setStatus(status: boolean): void {
    this.status = status;
  }

}
