import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProfileComponent} from './profile/profile.component';
import {ChallengesComponent} from './challenges/challenges.component';
import {MainComponent} from './main.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'challenges',
        component: ChallengesComponent
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
