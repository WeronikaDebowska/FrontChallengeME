import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {ProfileModule} from './profile/profile.module';
import {ChallengesModule} from './challenges/challenges.module';
import {MainRoutingModule} from './main-routing';
import {ChallengeModule} from './challenge/challenge.module';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    ProfileModule,
    ChallengesModule,
    MainRoutingModule,
    ChallengeModule,
  ],
  exports: [MainComponent],
  bootstrap: [MainComponent]
})
export class MainModule {
}
