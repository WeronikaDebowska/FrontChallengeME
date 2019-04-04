import {IUser} from './interfaces';

export class User implements IUser {

  userName: string;
  id: string;

  constructor(principal) {
    console.log(principal);
    this.userName = principal.name;
    this.id = principal.id ? principal.id : '';
  }
}
