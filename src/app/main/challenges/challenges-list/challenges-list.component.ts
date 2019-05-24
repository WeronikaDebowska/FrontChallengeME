import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimestampService} from '../../../services/timestamp.service';


@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.css']
})
export class ChallengesListComponent implements OnInit {

  @Input() challengesList: any;
  @Output() tagSelectEvent = new EventEmitter<string>();

  constructor(
    private timestamp: TimestampService
  ) {
  }

  ngOnInit() {
  }

  filterTag(tag) {
    this.tagSelectEvent.emit(tag);
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
