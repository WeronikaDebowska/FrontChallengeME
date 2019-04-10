import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServicesModule} from './services/services.module';
import {SharedModule} from './shared/shared.module';
import {MainModule} from './main/main.module';
import {LoginComponent} from './login/login.component';
import {TokenInterceptor} from './shared/token.interceptor';
import {LoginFormComponent} from './login/login-form/login-form.component';
import {RegisterFormComponent} from './login/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServicesModule,
    SharedModule,
    MainModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
