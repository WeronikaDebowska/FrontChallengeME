import 'moment';
import * as moment from 'moment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {

  isBefore(timestamp): boolean {
    return moment(timestamp).isBefore(moment.utc());
  }
}
