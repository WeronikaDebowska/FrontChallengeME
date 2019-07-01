import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExercisesComponent} from './exercises/exercises.component';
import {ParticipantsComponent} from './participants/participants.component';
import {StatsComponent} from './stats/stats.component';
import {ExecutionsComponent} from './executions/executions.component';
import {EditComponent} from './edit/edit.component';
import {ChallengeComponent} from './challenge.component';
import {MainRoutingModule} from '../main-routing';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {ChallengeService} from './challenge.service';


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
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      'radius': 25,
      'space': -5,
      'maxPercent': 100,
      'outerStrokeWidth': 5,
      'outerStrokeColor': '#c2286f',
      'innerStrokeColor': '#cec9cb',
      'innerStrokeWidth': 5,
      'showBackground': false,
      'showSubtitle': false,
    })
  ],
  providers: [
    ChallengeService
  ]
})
export class ChallengeModule {
}
