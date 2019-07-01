import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChallengesModule {
}
