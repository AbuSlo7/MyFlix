import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public isMain = new BehaviorSubject<boolean>(true);
  public isSignUp = new BehaviorSubject<boolean>(false);
  public isLogin = new BehaviorSubject<boolean>(false);
  public isBrowse = new BehaviorSubject<boolean>(false);
  public isWatch = new BehaviorSubject<boolean>(false);
  constructor() { }
}
