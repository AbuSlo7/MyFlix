import { Component, OnInit } from '@angular/core';
import {NotificationService} from 'notification';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private notifi: NotificationService, private shared: SharedService, private router: Router) {}
  title = this.notifi.getNumber();
  main = true;
  ngOnInit() {
    this.shared.isMain.subscribe((main) => this.main = main);
  }
  goSignup() {
    this.shared.isMain.next(false);
    this.shared.isSignUp.next(true);
    this.router.navigate(['/signup']);
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
