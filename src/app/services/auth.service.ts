import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getToken(): string {
    return sessionStorage.getItem('token');
  }

  public setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public clearToken(): void {
    sessionStorage.clear();
  }
}
