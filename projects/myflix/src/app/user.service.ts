import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public Email = new BehaviorSubject<string>('');
  public Code = new BehaviorSubject<string>('');
  public Role = new BehaviorSubject<string>('');
  public isActive = new BehaviorSubject<string>('');
  public Fname = new BehaviorSubject<string>('');
  public Lname = new BehaviorSubject<string>('');
}
