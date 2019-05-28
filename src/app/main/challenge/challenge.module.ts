import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExercisesComponent} from './exercises/exercises.component';
import {ParticipantsComponent} from './participants/participants.component';
import {StatsComponent} from './stats/stats.component';
import {ExecutionsComponent} from './executions/executions.component';
import {EditComponent} from './edit/edit.component';
import {ChallengeComponent} from './challenge.component';
import {MainRoutingModule} from '../main-routing';


@NgModule({
  declarations: [
    ChallengeComponent,
    ExercisesComponent,
    ParticipantsComponent,
    StatsComponent,
    ExecutionsComponent,
    EditComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class ChallengeModule {
}
