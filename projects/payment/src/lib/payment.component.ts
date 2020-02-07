import { Component, OnInit } from '@angular/core';
import {PaymentService} from './payment.service';
import {BehaviorSubject} from 'rxjs';
@Component({
  selector: 'lib-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  Fname = '';
  Lname = '';
  CardNo: number;
  CVV = '';
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
  checkText = /^[A-Za-z \u0600-\u06FF]+$/;
  CVVCheck = false;
  CVVCheckText = '';
  months = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years = ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  constructor(private payment: PaymentService) { }

  ngOnInit() {
    this.payment.CardNo.subscribe((cn) => this.CardNo = cn);
    this.payment.Fname.subscribe((fn) => this.Fname = fn);
    this.payment.Lname.subscribe((ln) => this.Lname = ln);
    this.payment.CVV.subscribe((cvv) => this.CVV = cvv);
    this.payment.FnameCheck.subscribe((fnc) => this.FnameCheck = fnc);
    this.payment.LnameCheck.subscribe((lnc) => this.LnameCheck = lnc);
    this.payment.CardNoCheck.subscribe((cnc) => this.CardNoCheck = cnc);
    this.payment.FnameCheckText.subscribe((fnct) => this.FnameCheckText = fnct);
    this.payment.LnameCheckText.subscribe((lnct) => this.LnameCheckText = lnct);
    this.payment.CardNoCheckText.subscribe((cncl) => this.CardNoCheckText = cncl);
    this.payment.DateCheckYearText.subscribe((dcyt) => this.DateCheckYearText = dcyt);
    this.payment.DateCheckMonthText.subscribe((dcmt) => this.DateCheckMonthText = dcmt);
    this.payment.CVVCheckText.subscribe((cvvct) => this.CVVCheckText = cvvct);
    this.payment.DateCheckYear.subscribe((dcy) => this.DateCheckYear = dcy);
    this.payment.DateCheckMonth.subscribe((dcm) => this.DateCheckMonth = dcm);
    this.payment.DateMonth.subscribe((dm) => this.DateMonth = dm);
    this.payment.DateYear.subscribe((dy) => this.DateYear = dy);
    this.payment.CVVCheck.subscribe((cn) => this.CVVCheck = cn);
  }
}
