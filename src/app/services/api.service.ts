import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IUser} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  login(user: IUser) {
    return this.http.post<Observable<boolean>>(environment.apiEndpoint + 'login', user);
  }

  authenticate() {
    const headers = new HttpHeaders({'Authorization': 'Basic ' + sessionStorage.getItem('token')});
    const options = {headers: headers};
    return this.http.post<Observable<IUser>>(environment.apiEndpoint + 'user', {}, options);
  }
}
