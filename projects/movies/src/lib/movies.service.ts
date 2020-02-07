import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Genres} from './genres';
import {Movies} from './movies';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genres[]> {
    return this.http.get<Genres[]>('http://movies-app/api/getGenres.php');
  }
  getAction(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://movies-app/api/getAction.php');
  }
  getAnimi(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://movies-app/api/getAnimi.php');
  }
  getComidies(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://movies-app/api/getComidies.php');
  }
  getCrime(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://movies-app/api/getCrime.php');
  }
  getDrama(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://movies-app/api/getDramas.php');
  }
  getHorror(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://movies-app/api/getHorror.php');
  }
  getRomance(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://movies-app/api/getRomance.php');
  }
  getSciFi(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://movies-app/api/getSciFi.php');
  }
  getMain(): Observable<Movies> {
    return this.http.get<Movies>('http://movies-app/api/getMain.php');
  }
  getEstimates(body: FormData): Observable<Movies[]> {
    return this.http.post<Movies[]>('http://movies-app/api/getMovieFromEstimates.php', body);
  }
  searchMovie(body: FormData): Observable<Movies[]> {
    return this.http.post<Movies[]>('http://movies-app/api/searchMovie.php', body);
  }
  insertMyList(body: FormData): Observable<string> {
    return this.http.post<string>('http://movies-app/api/myListinsert.php', body);
  }
  getMyList(body: FormData): Observable<Movies[]> {
    return this.http.post<Movies[]>('http://movies-app/api/getMyList.php', body);
  }
}
