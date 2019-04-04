import {IUser} from './interfaces';

export class User implements IUser {

  userName: string;
  id: string;

  constructor(principal) {
    this.userName = principal.name;
    this.id = principal.id ? principal.id : '';
  }
}
