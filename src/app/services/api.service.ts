import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IChallenge, IExercise, IParticipant, IUser} from '../shared/interfaces';

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
    return this.http.get<IChallenge []>(`${environment.apiEndpoint}users/${id}/challenges`);
  }

  getPartocipantsForChallenge(id: number): Observable<IParticipant []> {
    return this.http.get<IParticipant []>(`${environment.apiEndpoint}challenges/${id}/participants`);
  }

  getExercisesForChallenge(id: number): Observable<IExercise []> {
    return this.http.get<IExercise []>(`${environment.apiEndpoint}challenges/${id}/exercises`);
  }

  handleError(err) {
    // TODO error handling for different error codes
    console.log(err);
  }
}
