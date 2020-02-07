import { Component, OnInit } from '@angular/core';
import {NotificationService} from 'notification';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';
import {UserService} from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private notifi: NotificationService, private shared: SharedService, private router: Router, private user: UserService) {}
  Email = '';
  main = true;
  checkEmail = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  EmailCheck = false;
  EmailCheckText = ''
  ngOnInit() {
    this.shared.isMain.subscribe((main) => this.main = main);
  }
  goSignup() {
    this.EmailCheck = false;
    if (this.Email.length > 0 && this.checkEmail.test(this.Email) === false) {
      this.EmailCheck = true;
      this.EmailCheckText = '* Email is incorrect';
    }
    if (this.Email.length === 0) {
      this.EmailCheck = true;
      this.EmailCheckText = '* Email is empty';
    }
    if (this.EmailCheck === false) {
      this.shared.isMain.next(false);
      this.shared.isSignUp.next(true);
      this.user.Email.next(this.Email);
      this.router.navigate(['/signup']);
    }
  }
  goSignin() {
    this.shared.isMain.next(false);
    this.shared.isLogin.next(true);
    this.router.navigate(['/login']);
  }
  goMain() {
    this.shared.isMain.next(true);
    this.router.navigate(['/']);
  }
}
