import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {SharedService} from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuth: boolean;
  constructor(private router: Router,
              private shared: SharedService) {}
  canActivate(): boolean {
    this.shared.isAuth.subscribe((data) => this.isAuth = data);
    if (this.isAuth === true) {
      return true;
    } else {
      return false;
    }
  }
}
