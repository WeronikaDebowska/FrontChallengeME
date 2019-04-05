export class User {

  private readonly userName: string;
  private readonly id: string;

  constructor(principal) {
    this.userName = principal.name;
    this.id = principal.id ? principal.id : '';
  }

  getName() {
    return this.userName;
  }

  getId() {
    return this.id;
  }
}
