import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  getExecutionsForChallenge(userId: string, challId: number): Observable<{ [key: number]: { [key: number]: number } }> {
    return this.http.get<{ [key: number]: { [key: number]: number } }>
    (`${environment.apiEndpoint}users/${userId}/challenges/${challId}/executions`);
  }

  deleteChallenge(id: number): Observable<{}> {
    console.log('to delete: ' + id);
    return this.http.delete(`${environment.apiEndpoint}challenges/${id}`);
  }

  saveChallenge(userId: string, name: string, start: string, finish: string): Observable<{}> {
    const url = `${environment.apiEndpoint}users/${userId}/challenges`;
    const body = `{"name": "${name}", "start":"${start}", "finish":"${finish}"}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': 'my-auth-token'
      })
    };
    return this.http.post(url, body, httpOptions);
  }

  saveExecution(userId: string, challId: number, id: string, date: string, repeats: string): Observable<{}> {
    let body = `{"id": "${id}", "date":"${date}", "repeats":"${repeats}"}`;
    body = JSON.parse(JSON.stringify(body));
    const chall = challId.toString();
    const url = `${environment.apiEndpoint}users/${userId}/challenges/${chall}/executions`;
    console.log('apiService ' + url + ' ' + body);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': 'my-auth-token'
      })
    };
    return this.http.post(url, body, httpOptions);
  }

  handleError(err) {
    // TODO error handling for different error codes
    console.log(err);
  }
}
