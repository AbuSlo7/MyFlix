import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor() { }
  public movieUrl = new BehaviorSubject<string>('');
}
