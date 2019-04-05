import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ILoginData} from '../shared/interfaces';
import {User} from '../shared/user';

@Injectable()

export class ApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  login(user: ILoginData) {
    return this.http.post<Observable<boolean>>(environment.apiEndpoint + 'login', user);
  }

  authenticate() {
    return this.http.get<Observable<User>>(environment.apiEndpoint + 'user');
  }
}
