import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProfileComponent} from './profile/profile.component';
import {ChallengesComponent} from './challenges/challenges.component';
import {MainComponent} from './main.component';
import {ChallengeComponent} from './challenge/challenge.component';
import {ExercisesComponent} from './challenge/exercises/exercises.component';
import {ParticipantsComponent} from './challenge/participants/participants.component';
import {ExecutionsComponent} from './challenge/executions/executions.component';
import {StatsComponent} from './challenge/stats/stats.component';
import {EditComponent} from './challenge/edit/edit.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'challenges',
        component: ChallengesComponent
      },
      {
        path: 'challenge/:id',
        component: ChallengeComponent,
        children: [
          {
            path: 'exercises',
            component: ExercisesComponent,
          },
          {
            path: 'participants',
            component: ParticipantsComponent
          },
          {
            path: 'executions',
            component: ExecutionsComponent
          },
          {
            path: 'stats',
            component: StatsComponent
          },
          {
            path: 'edit',
            component: EditComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
