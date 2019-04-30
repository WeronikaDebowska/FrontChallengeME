import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IChallenge, IUser} from '../shared/interfaces';

@Injectable()

export class ApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  login(formData: FormData): Observable<IUser> {
    return this.http.post<IUser>(environment.apiEndpoint + 'authorization', formData);
  }

  getUserChallenges(id: String): Observable<IChallenge []> {
    return this.http.get<IChallenge []>(environment.apiEndpoint + `users/${id}/challenges`);
  }

  handleError(err) {
    // TODO error handling for different error codes
    console.log(err);
  }
}
