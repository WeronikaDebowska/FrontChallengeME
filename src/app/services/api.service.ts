import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()

export class ApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  login(formData: FormData) {
    return this.http.post<Observable<any>>(environment.apiEndpoint + 'authorization', formData);
  }

  // authenticate() {
  //   return this.http.get<Observable<User>>(environment.apiEndpoint + 'user');
  // }
}
