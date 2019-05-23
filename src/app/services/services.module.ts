import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ApiService} from './api.service';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {TimestampService} from './timestamp.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    AuthService,
    UserService,
    TimestampService
  ]
})
export class ServicesModule {
}
