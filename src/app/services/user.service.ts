import {Injectable} from '@angular/core';
import {IChallenge, IUser} from '../shared/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService implements IUser {
  id: string;
  username: string;
  challenges: IChallenge[];

  setId(id: string): void {
    this.id = id;
  }

  setUsername(name: string): void {
    this.username = name;
  }

  setChallenges(challenges: IChallenge []): void {
    this.challenges = challenges;
  }
}
