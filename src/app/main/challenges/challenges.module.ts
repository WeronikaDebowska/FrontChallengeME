import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChallengesComponent} from './challenges.component';
import {ActiveComponent} from './active/active.component';
import {CreateComponent} from './create/create.component';
import {PassedComponent} from './passed/passed.component';

@NgModule({
  declarations: [ChallengesComponent, ActiveComponent, CreateComponent, PassedComponent],
  imports: [
    CommonModule
  ]
})
export class ChallengesModule {
}
