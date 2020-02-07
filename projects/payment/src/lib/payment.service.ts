import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }
  public Fname = new BehaviorSubject<string>('');
  public Lname = new BehaviorSubject<string>('');
  public CVV = new BehaviorSubject<string>('');
  public CardNo = new BehaviorSubject<number>(0);
  public FnameCheck = new BehaviorSubject<boolean>(false);
  public LnameCheck = new BehaviorSubject<boolean>(false);
  public CardNoCheck = new BehaviorSubject<boolean>(false);
  public FnameCheckText = new BehaviorSubject<string>('');
  public LnameCheckText = new BehaviorSubject<string>('');
  public CardNoCheckText = new BehaviorSubject<string>('');
  public DateCheckYearText = new BehaviorSubject<string>('');
  public DateCheckMonthText = new BehaviorSubject<string>('');
  public CVVCheckText = new BehaviorSubject<string>('');
  public DateCheckYear = new BehaviorSubject<boolean>(false);
  public DateCheckMonth = new BehaviorSubject<boolean>(false);
  public DateMonth = new BehaviorSubject<number>(0);
  public DateYear = new BehaviorSubject<number>(0);
  public CVVCheck = new BehaviorSubject<boolean>(false);

  savePayment(body: FormData): Observable<User> {
    return this.http.post<User>('http://payment-app/api/paymentSave.php', body);
  }
}
