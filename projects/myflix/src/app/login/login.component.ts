import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = false;
  constructor(private router: Router, private shared: SharedService) { }

  ngOnInit() {
    this.shared.isLogin.subscribe((login) => this.login = login);
  }
  goMain() {
    this.shared.isMain.next(true);
    this.shared.isLogin.next(false);
    this.router.navigate(['/']);
  }
  goBrowse() {
    this.shared.isBrowse.next(true);
    this.shared.isLogin.next(false);
    this.router.navigate(['/browse']);
  }
}
