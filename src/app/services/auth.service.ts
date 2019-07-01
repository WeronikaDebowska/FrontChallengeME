import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public clearToken(): void {
    localStorage.clear();
  }

  public getUserName(): string {
    // return atob(this.getToken()).split(':')[0];    //TODO HERE
    return 'Minnie';
  }

  public getUserId(): string {
    // return atob(this.getToken()).split(':')[2];   //TODO HERE
    return '5';
  }
}
