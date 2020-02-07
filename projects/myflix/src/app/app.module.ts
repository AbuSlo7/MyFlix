import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule, forRoute } from './app-routing.module';
import { AppComponent } from './app.component';

// importing Microservices

import {NotificationModule} from 'notification';
import {AnalyticsModule} from 'analytics';
import {PaymentModule} from 'payment';
import {UsersModule} from 'users';
import {MoviesModule} from 'movies';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';
import { WatchComponent } from './watch/watch.component';
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    forRoute,
    LoginComponent,
    BrowseComponent,
    WatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotificationModule,
    AnalyticsModule,
    PaymentModule,
    UsersModule,
    MoviesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
