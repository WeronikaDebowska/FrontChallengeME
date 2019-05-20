import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChallengesComponent} from './challenges.component';
import {ActiveComponent} from './active/active.component';
import {CreateComponent} from './create/create.component';
import {PassedComponent} from './passed/passed.component';
import {ChallengesListComponent} from './challenges-list/challenges-list.component';


@NgModule({
  declarations: [
    ChallengesComponent,
    ActiveComponent,
    CreateComponent,
    PassedComponent,
    ChallengesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChallengesModule {
}
