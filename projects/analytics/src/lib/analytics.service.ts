import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movies} from './movie';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }
  getMoviesById(body: FormData): Observable<string[]> {
    return this.http.post<string[]>('http://35.239.117.138:2006/api/analytics_selectMovieID.php', body);
  }
  getMovieIDs(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://35.239.117.138:2006/api/getMovieID.php');
  }
  saveUserData(body: FormData): Observable<string> {
    return this.http.post<string>('http://35.239.117.138:2006/api/analyticsSaveUser.php', body);
  }
  getEstimates(body: FormData): Observable<string[]> {
    return this.http.post<string[]>('http://35.239.117.138:2006/api/getEstimates.php', body);
  }
}
