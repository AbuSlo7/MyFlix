import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../shared.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  step1 = true;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;
  signup = false;
  constructor(private router: Router, private shared: SharedService) { }

  ngOnInit() {
    this.shared.isSignUp.subscribe((signup) => this.signup = signup);
  }
  f1to2() {
    this.step1 = false;
    this.step2 = true;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
  }
  f2to3() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = true;
    this.step4 = false;
    this.step5 = false;
  }
  f3to4() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = true;
    this.step5 = false;
  }
  f4to5() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = true;
  }
  goMain() {
    this.shared.isMain.next(true);
    this.shared.isSignUp.next(false);
    this.router.navigate(['/']);
  }
}
