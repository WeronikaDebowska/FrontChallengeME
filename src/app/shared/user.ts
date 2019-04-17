export class User {

  public readonly username: string;
  public readonly id: string;

  constructor(principal) {
    this.username = principal.username;
    this.id = principal.id ? principal.id : '';
  }
}
