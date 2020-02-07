import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {Router} from '@angular/router';
import {UsersService} from 'users';
import {UserService} from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = false;
  Email = '';
  Pass = '';
  error = false;
  constructor(private router: Router,
              private shared: SharedService,
              private users: UsersService,
              private user: UserService) { }

  ngOnInit() {
    this.shared.isLogin.subscribe((login) => this.login = login);
  }
  goMain() {
    this.shared.isMain.next(true);
    this.shared.isLogin.next(false);
    this.router.navigate(['/']);
  }
  Login() {
    this.error = false;
    const fd = new FormData();
    fd.set('Email', this.Email);
    fd.set('Pass', this.Pass);
    this.users.login(fd).subscribe((data) => {
      if (Object.keys(data).length === 0) {
        this.error = true;
      }
      if (Object.keys(data).length !== 0) {
        this.user.Code.next(data.Code);
        this.user.Email.next(data.Email);
        this.user.Fname.next(data.Fname);
        this.user.Lname.next(data.Lname);
        this.user.Role.next(data.Role);
        this.user.isActive.next(data.isActive);
        this.shared.isAuth.next(true);
        this.shared.isBrowse.next(true);
        this.shared.isLogin.next(false);
        this.router.navigate(['/browse']);      }
    });
  }
}
