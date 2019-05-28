import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChallengesComponent} from './challenges.component';
import {CreateComponent} from './create/create.component';
import {ChallengesListComponent} from './challenges-list/challenges-list.component';

@NgModule({
  declarations: [
    ChallengesComponent,
    CreateComponent,
    ChallengesListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ChallengesModule {
}
