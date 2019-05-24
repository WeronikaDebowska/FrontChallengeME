import {Component, OnInit} from '@angular/core';

import {IChallenge} from '../../shared/interfaces';

import {ApiService} from '../../services/api.service';
import {TimestampService} from '../../services/timestamp.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  activities = ['all activities', 'active', 'passed', 'future'];
  statuses = ['all statuses', 'accepted', 'pending', 'rejected'];
  challengesList = [];
  searchField;
  statusSelectField;
  activitySelectField;

  constructor(
    public user: UserService,
    private api: ApiService,
    private timesService: TimestampService
  ) {
  }

  ngOnInit() {
    this.loadChallenges(this.user.id);
    this.searchField = document.querySelector('#search');
    this.statusSelectField = document.querySelector('#status');
    this.activitySelectField = document.querySelector('#activity');
  }

  filter(): void {
    console.log(this.searchField.value);
    let filteredList = this.search(this.user.challenges, this.searchField.value);
    filteredList = this.filterStatuses(filteredList, this.statusSelectField.value);
    filteredList = this.filterActivities(filteredList, this.activitySelectField.value);
    this.challengesList = filteredList;
  }

  filterTag(tag): void {
    this.clearAllFilterValues();
    this.challengesList = this.user.challenges.filter(challenge => challenge.tagList.includes(tag));
  }

  loadChallenges(id: string): void {
    const x = [
      {
        'challengeName': 'brazylijskie pośladki',
        'challengeId': 1,
        'userRole': 'host',
        'challengeStatus': 'accepted',
        'start': '2018-12-31T23:00:00.000+0000',
        'finish': '2019-03-30T23:00:00.000+0000',
        'accomplishmentPercentage': 50,
        'tagList': [
          'Buttocks',

        ]
      },
      {
        'challengeName': '6-cio pak w trzy dni',
        'challengeId': 1,
        'userRole': 'participant',
        'challengeStatus': 'rejected',
        'start': '2019-04-27T23:00:00.000+0000',
        'finish': '2019-04-30T23:00:00.000+0000',
        'accomplishmentPercentage': 50,
        'tagList': [

          'Strength'
        ]
      },
      {
        'challengeName': 'talia osy',
        'challengeId': 3,
        'userRole': 'participant',
        'challengeStatus': 'accepted',
        'start': '2019-01-01T09:23:54.000+0000',
        'finish': '2019-09-29T22:00:00.000+0000',
        'accomplishmentPercentage': 50,
        'tagList': [
          'Buttocks',
          'Strength'
        ]
      },
      {
        'challengeName': 'skalpel',
        'challengeId': 3,
        'userRole': 'host',
        'challengeStatus': 'pending',
        'start': '2019-07-01T09:23:54.000+0000',
        'finish': '2019-011-29T22:00:00.000+0000',
        'accomplishmentPercentage': 50,
        'tagList': [
          'Buttocks',
          'Strength'
        ]
      }
    ];
    this.user.setChallenges(x);
    this.challengesList = x;

    //   this.api.getUserChallenges(id).subscribe((challenges: IChallenge []) => {
    //       this.user.setChallenges(challenges);
    //       this.resetFilters();
    //     },
    //     err => {
    //       // Todo info could not load challenges
    //       this.api.handleError(err);
    //     });
  }

  private search(list: IChallenge[], text: string): IChallenge[] {
    const matcher = new RegExp(text, 'i');
    return list.filter(challenge => matcher.test(challenge.challengeName));
  }

  private filterStatuses(list: IChallenge[], value: string): IChallenge[] {
    if (value !== this.statuses[0]) {
      return list.filter(challenge => challenge.challengeStatus === value);
    } else {
      return list;
    }
  }

  private filterActivities(list: IChallenge[], activity: string): IChallenge[] {
    let filteredList;
    switch (activity) {
      case this.activities[1]: // active
        filteredList = list.filter(
          challenge => this.timesService.isBefore(challenge.start) && !this.timesService.isBefore(challenge.finish));
        break;
      case this.activities[2]: // passed
        filteredList = list.filter(
          challenge => this.timesService.isBefore(challenge.finish));
        break;
      case this.activities[3]: // future
        filteredList = list.filter(
          challenge => !this.timesService.isBefore(challenge.start));
        break;
      case this.activities[0]: // all
        filteredList = list;
    }
    return filteredList;
  }

  private resetFilters(): void {
    this.clearAllFilterValues();
    this.challengesList = this.user.challenges;
  }

  private clearAllFilterValues(): void {
    this.searchField.value = '';
    this.statusSelectField.value = this.statusSelectField.children[0].value;
    this.activitySelectField.value = this.activitySelectField.children[0].value;
  }
}
