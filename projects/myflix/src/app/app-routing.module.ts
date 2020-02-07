import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';
import { WatchComponent } from './watch/watch.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'browse', component: BrowseComponent, canActivate: [AuthGuard]},
  {path: 'watch', component: WatchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const forRoute = [BrowseComponent, SignupComponent, LoginComponent, WatchComponent];
