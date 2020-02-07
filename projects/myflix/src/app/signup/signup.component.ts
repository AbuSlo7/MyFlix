import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../shared.service';
import {MoviesService} from 'movies';
import {UserService} from '../user.service';
import {UsersService} from 'users';
import {AnalyticsService} from 'analytics';
import {PaymentService} from 'payment';

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
  step6 = false;
  error = false;
  isMv1 = false;
  isMv2 = false;
  isMv3 = false;
  isMv4 = false;
  isMv5 = false;
  isMv6 = false;
  isMv7 = false;
  isMv8 = false;
  isMv9 = false;
  isMv10 = false;
  isMv11 = false;
  isMv12 = false;
  Code = '';
  GeneratedCode = Math.floor(1000 + Math.random() * 9000);
  Signiture = 'MF';
  codes = [];
  signup = false;
  genres = [];
  selectedGenres = [];
  Fname = '';
  Lname = '';
  Email = '';
  Pass = '';
  CardNo: number;
  CVV = '';
  isAction = false;
  isAnimation = false;
  isComedy = false;
  isCrime = false;
  isDrama = false;
  isHorror = false;
  isRomance = false;
  isSciFi = false;
  PassChick = false;
  checkText = /^[A-Za-z \u0600-\u06FF]+$/;
  FnameCheck = false;
  LnameCheck = false;
  FnameCheckText = '';
  LnameCheckText = '';
  CardNoCheck = false;
  CardNoCheckText = '';
  DateMonth: number;
  DateYear: number;
  DateCheckYear = true;
  DateCheckMonth = true;
  DateCheckYearText = '';
  DateCheckMonthText = '';
  CVVCheck = false;
  CVVCheckText = '';
  months = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years = ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  isActive = 'True';
  testArray = ['hello', 'hi', 'bye'];
  genresSelected = [];
  moviesSelected = [];
  movieIDs = [];
  constructor(
    private router: Router,
    private shared: SharedService,
    private MVService: MoviesService,
    private user: UserService,
    private users: UsersService,
    private analytic: AnalyticsService,
    private payment: PaymentService) {}

  ngOnInit() {
    this.shared.isSignUp.subscribe((signup) => this.signup = signup);
    this.MVService.getGenres().subscribe( (genres) => this.genres = genres);
    this.user.Email.subscribe((email) => this.Email = email);
    this.users.getCodes().subscribe((dataCode) => {this.codes = dataCode; }
    );
    this.analytic.getMovieIDs().subscribe((res) => this.movieIDs = res);
  }
  f1to2() {
    this.step1 = false;
    this.step2 = true;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
    this.step6 = false;
  }
  f2to3() {
    this.PassChick = false;
    if (this.Pass.length === 0 || this.Pass.length < 6 || this.Pass.length > 12) {
      this.PassChick = true;
    } else {
      this.step1 = false;
      this.step2 = false;
      this.step3 = true;
      this.step4 = false;
      this.step5 = false;
      this.step6 = false;
    }
  }
  f3to4() {
    this.FnameCheck = false;
    this.LnameCheck = false;
    this.CardNoCheck = false;
    this.DateCheckYear = false;
    this.DateCheckMonth = false;
    this.CVVCheck = false;
    if (this.Fname.length > 0 && this.checkText.test(this.Fname) === false) {
      this.FnameCheck = true;
      this.FnameCheckText = '* First name is in wrong format';
    }
    if (this.Fname.length === 0) {
      this.FnameCheck = true;
      this.FnameCheckText = '* First name can not be empty';
    }
    if (this.Lname.length > 0 && this.checkText.test(this.Lname) === false) {
      this.LnameCheck = true;
      this.LnameCheckText = '* Last name is in wrong format';
    }
    if (this.Lname.length === 0 ) {
      this.LnameCheck = true;
      this.LnameCheckText = '* Lirst name can not be empty';
    }
    if (this.CardNo ===  undefined || this.CardNo === null) {
      this.CardNoCheck = true;
      this.CardNoCheckText = '* Card number can not be empty';
    }
    if (this.CardNo.toString().length > 0 && this.CardNo.toString().length < 16) {
      this.CardNoCheck = true;
      this.CardNoCheckText = '* Card number length is incorrect';
    }
    if ( this.CardNo.toString().length > 16) {
      this.CardNoCheck = true;
      this.CardNoCheckText = '* Card number length is incorrect';
    }
    if (this.DateYear === undefined || this.DateYear === null) {
      this.DateCheckYear = true;
      this.DateCheckYearText = '* Year can not be unselected';
    }
    if (this.DateMonth === undefined || this.DateMonth === null) {
      this.DateCheckMonth = true;
      this.DateCheckMonthText = '* Month can not be unselected';
    }
    if (this.CVV === undefined || this.CVV === null) {
      this.CVVCheck = true;
      this.CVVCheckText = '* CVV can not be empty';
    }
    if (this.CVV.toString().length !== 3) {
      this.CVVCheck = true;
      this.CVVCheckText = '* CVV has to be three numbers';
    }

    if (this.FnameCheck === false &&
    this.LnameCheck === false &&
    this.CardNoCheck === false &&
    this.DateCheckYear === false &&
    this.DateCheckMonth === false &&
    this.CVVCheck === false) {
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = true;
    this.step5 = false;
    this.step6 = false;
    }
  }
  f4to5() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = true;
    this.step6 = false;
  }
  f5to6() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
    this.step6 = true;
  }
  goMain() {
    this.shared.isMain.next(true);
    this.shared.isSignUp.next(false);
    this.router.navigate(['/']);
  }
  getGenres() {
    this.selectedGenres = [];
  }

  final() {
    this.genresSelected = [];
    this.moviesSelected = [];
    this.error = false;
    if (this.isAction === true) {
      this.genresSelected.push(this.genres[0].GenCode);
    }
    if (this.isAnimation === true) {
      this.genresSelected.push(this.genres[1].GenCode);
    }
    if (this.isComedy === true) {
      this.genresSelected.push(this.genres[2].GenCode);
    }
    if (this.isCrime === true) {
      this.genresSelected.push(this.genres[3].GenCode);
    }
    if (this.isDrama === true) {
      this.genresSelected.push(this.genres[4].GenCode);
    }
    if (this.isHorror === true) {
      this.genresSelected.push(this.genres[5].GenCode);
    }
    if (this.isRomance === true) {
      this.genresSelected.push(this.genres[6].GenCode);
    }
    if (this.isSciFi === true) {
      this.genresSelected.push(this.genres[7].GenCode);
    }
    if (this.isMv1 === true) {
      const testFD = new FormData();
      testFD.set('ID', this.movieIDs[0].movieID);
      this.analytic.getMoviesById(testFD).subscribe((res) => {
        for (const i of res) {
          this.moviesSelected.push(i);
        }
      });
    }
    if (this.isMv2 === true) {
      const testFD = new FormData();
      testFD.set('ID', this.movieIDs[1].movieID);
      this.analytic.getMoviesById(testFD).subscribe((res) => {
        for (const i of res) {
          this.moviesSelected.push(i);
        }
      });
    }
    if (this.isMv3 === true) {
      const testFD = new FormData();
      testFD.set('ID', this.movieIDs[2].movieID);
      this.analytic.getMoviesById(testFD).subscribe((res) => {
        for (const i of res) {
          this.moviesSelected.push(i);
        }
      });
    }
    if (this.isMv4 === true) {
      const testFD = new FormData();
      testFD.set('ID', this.movieIDs[3].movieID);
      this.analytic.getMoviesById(testFD).subscribe((res) => {
        for (const i of res) {
          this.moviesSelected.push(i);
        }
      });
    }
    if (this.isMv5 === true) {
      const testFD = new FormData();
      testFD.set('ID', this.movieIDs[4].movieID);
      this.analytic.getMoviesById(testFD).subscribe((res) => {
        for (const i of res) {
          this.moviesSelected.push(i);
        }
      });
    }
    if (this.isMv6 === true) {
      const testFD = new FormData();
      testFD.set('ID', this.movieIDs[5].movieID);
      this.analytic.getMoviesById(testFD).subscribe((res) => {
        for (const i of res) {
          this.moviesSelected.push(i);
        }
      });
    }
    if (this.isMv7 === true) {
      const testFD = new FormData();
      testFD.set('ID', this.movieIDs[6].movieID);
      this.analytic.getMoviesById(testFD).subscribe((res) => {
        for (const i of res) {
          this.moviesSelected.push(i);
        }
      });
    }
    if (this.isMv8 === true) {
      const testFD = new FormData();
      testFD.set('ID', this.movieIDs[7].movieID);
      this.analytic.getMoviesById(testFD).subscribe((res) => {
        for (const i of res) {
          this.moviesSelected.push(i);
        }
      });
    }
    if (this.isMv9 === true) {
      const testFD = new FormData();
      testFD.set('ID', this.movieIDs[8].movieID);
      this.analytic.getMoviesById(testFD).subscribe((res) => {
        for (const i of res) {
          this.moviesSelected.push(i);
        }
      });
    }
    if (this.isMv10 === true) {
      const testFD = new FormData();
      testFD.set('ID', this.movieIDs[9].movieID);
      this.analytic.getMoviesById(testFD).subscribe((res) => {
        for (const i of res) {
          this.moviesSelected.push(i);
        }
      });
    }
    if (this.isMv11 === true) {
      const testFD = new FormData();
      testFD.set('ID', this.movieIDs[10].movieID);
      this.analytic.getMoviesById(testFD).subscribe((res) => {
        for (const i of res) {
          this.moviesSelected.push(i);
        }
      });
    }
    if (this.isMv12 === true) {
      const testFD = new FormData();
      testFD.set('ID', this.movieIDs[11].movieID);
      this.analytic.getMoviesById(testFD).subscribe((res) => {
        for (const i of res) {
          this.moviesSelected.push(i);
        }
      });
    }
    if (this.codes == null) {
      this.codes = ['null'];
    }
    if (this.codes.includes(this.GeneratedCode.toString())) {
      this.GeneratedCode = Math.floor(1000 + Math.random() * 9000);
      if (this.codes.includes(this.GeneratedCode.toString())) {
        this.GeneratedCode = Math.floor(1000 + Math.random() * 9000);
        if (this.codes.includes(this.GeneratedCode.toString())) {
          this.GeneratedCode = Math.floor(1000 + Math.random() * 9000);
          if (this.codes.includes(this.GeneratedCode.toString())) {
            this.GeneratedCode = Math.floor(1000 + Math.random() * 9000);
            if (this.codes.includes(this.GeneratedCode.toString())) {
              this.GeneratedCode = Math.floor(1000 + Math.random() * 9000);
            }
          }
        }
      }
    }
    this.Code = this.Signiture + this.GeneratedCode.toString();
    const fd = new FormData();
    fd.set('Fname', this.Fname);
    fd.set('Lname', this.Lname);
    fd.set('Pass', this.Pass);
    fd.set('Code', this.Code);
    fd.set('Email', this.Email);
    fd.set('Role', 'usr');
    fd.set('isActive', this.isActive);
    this.users.saveUser(fd).subscribe((data1) => {
          if (Number(data1) === 1) {
            const paymentFD = new FormData();
            paymentFD.set('Code', this.Code);
            paymentFD.set('CardNo', this.CardNo.toString());
            paymentFD.set('Date', this.DateMonth.toString() + '/' + this.DateYear.toString());
            paymentFD.set('CVV', this.CVV);
            this.payment.savePayment(paymentFD).subscribe((paymentData) => {
              if (Number(paymentData) === 1) {
                const analyticsFD = new FormData();
                paymentFD.set('Code', this.Code);
                paymentFD.set('Genres', JSON.stringify(this.genresSelected));
                paymentFD.set('Movies', JSON.stringify(this.moviesSelected));
                this.analytic.saveUserData(paymentFD).subscribe((resp) => {
                  if (Number(resp) === 1) {
                    const sendEmail = new FormData();
                    sendEmail.set('Email', this.Email);
                    sendEmail.set('Code', this.Code);
                    this.users.sendEmail(sendEmail).subscribe((email) => {
                      this.f5to6();
                    });
                  } else {
                    this.error = true;
                  }
                });
              } else {
                this.error = true;
              }
            });
          } else if (Number(data1) === 0) {
            this.error = true;
          }
        }
      );
  }

  goLogin() {
    this.shared.isLogin.next(true);
    this.shared.isSignUp.next(false);
    this.router.navigate(['/login']);
  }

  test() {
    const testFD = new FormData();
    testFD.set('ID', '80');
    this.analytic.getMoviesById(testFD).subscribe((res) => {
      for (const i of res) {
        console.log(i);
      }
    });
  }
}
