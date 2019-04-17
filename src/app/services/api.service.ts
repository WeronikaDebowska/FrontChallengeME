import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../shared/user';

@Injectable()

export class ApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  login(formData: FormData): Observable<User> {
    return this.http.post<User>(environment.apiEndpoint + 'authorization', formData);
  }

  // authenticate() {
  //   return this.http.get<Observable<User>>(environment.apiEndpoint + 'user');
  // }
}
