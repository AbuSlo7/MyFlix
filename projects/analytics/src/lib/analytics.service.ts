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
    return this.http.post<string[]>('http://analytics-app/api/analytics_selectMovieID.php', body);
  }
  getMovieIDs(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://analytics-app/api/getMovieID.php');
  }
  saveUserData(body: FormData): Observable<string> {
    return this.http.post<string>('http://analytics-app/api/analyticsSaveUser.php', body);
  }
  getEstimates(body: FormData): Observable<string[]> {
    return this.http.post<string[]>('http://analytics-app/api/getEstimates.php', body);
  }
}
