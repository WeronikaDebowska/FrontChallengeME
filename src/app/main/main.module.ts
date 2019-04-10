import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {ProfileModule} from './profile/profile.module';
import {ChallengesModule} from './challenges/challenges.module';
import {MainRoutingModule} from './main-routing';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ProfileModule,
    ChallengesModule,
    MainRoutingModule
  ],
  exports: [MainComponent],
  bootstrap: [MainComponent]
})
export class MainModule {
}
