import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import {Codes} from './codes';
import {Userobj} from './userObj';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  saveUser(body: FormData): Observable<User> {
    return this.http.post<User>('http://users.saleh.cloud/api/userSave.php', body);
  }
  getCodes(): Observable<Codes[]> {
    return this.http.get<Codes[]>('http://users.saleh.cloud/api/getCodes.php');
  }
  login(body: FormData): Observable<Userobj> {
    return this.http.post<Userobj>('http://users.saleh.cloud/api/login.php', body);
  }
  sendEmail(body: FormData): Observable<number> {
    return this.http.post<number>('http://saleh-myflix.email/sendEmail.php', body);
  }
}
