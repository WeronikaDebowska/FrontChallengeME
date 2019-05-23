import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../../shared/interfaces';
import {TimestampService} from '../../../services/timestamp.service';


@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.css']
})
export class ChallengesListComponent implements OnInit {

  @Input() user: IUser;

  constructor(
    private timestamp: TimestampService
  ) {
  }

  ngOnInit() {
    console.log(this.user);
  }

  getBcgColor(status: string, startTimestamp: string, finishTimestamp: string): string {
    const hasStarted = this.timestamp.isBefore(startTimestamp);
    const hasFinished = this.timestamp.isBefore(finishTimestamp);
    let color: string;
    if (hasFinished) {
      return 'var(--secondary)';
    }
    if (!hasStarted) {
      return 'var(--info)';
    }
    switch (status) {
      case 'accepted':
        color = 'var(--success)';
        break;
      case 'rejected':
        color = 'var(--danger)';
        break;
      case 'pending':
        color = 'var(--warning)';
    }
    return color;
  }
}
