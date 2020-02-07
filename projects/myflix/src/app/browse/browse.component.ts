import {Component, ElementRef, OnInit} from '@angular/core';
import {SharedService} from '../shared.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {MoviesService} from 'movies';
import {Movies} from '../movie';
import {WatchService} from '../watch.service';
import {AnalyticsService} from 'analytics';
import {UserService} from '../user.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  Code = '';
  Email = '';
  Fname = '';
  Lname = '';
  Role = '';
  Status = '';
  search = '';
  manager = false;
  SearchRES = [];
  isProfile = false;
  isUpload = false;
  isMyList = false;
  isSearch = false;
  browse = false;
  Action = [];
  Animi = [];
  Comidies = [];
  Crime = [];
  Dramas = [];
  Recommended = [];
  estimates = [];
  Horror = [];
  Romance = [];
  SciFi = [];
  url = 'http://movies.saleh.cloud/';
  MovieName = '';
  MovieDescription = '';
  MovieBoxOffice = '';
  MovieStarring = '';
  MovieDirector = '';
  mainSurce = '';
  mute = true;
  unmute = false;
  constructor(private router: Router,
              private shared: SharedService,
              private movies: MoviesService,
              private elRef: ElementRef,
              private watch: WatchService,
              private analytic: AnalyticsService,
              private user: UserService) {}

  ngOnInit() {
    this.shared.isBrowse.subscribe((browse) => this.browse = browse);
    this.movies.getAction().subscribe((action) => this.Action = action);
    this.movies.getAnimi().subscribe((animi) => this.Animi = animi);
    this.movies.getComidies().subscribe((comidy) => this.Comidies = comidy);
    this.movies.getCrime().subscribe((crime) => this.Crime = crime);
    this.movies.getDrama().subscribe((drama) => this.Dramas = drama);
    this.movies.getHorror().subscribe((horror) => this.Horror = horror);
    this.movies.getSciFi().subscribe((scfi) => this.SciFi = scfi);
    this.movies.getRomance().subscribe((romance) => this.Romance = romance);
    this.movies.getMain().subscribe((main) => {
      this.MovieName = main.MovieName;
      this.MovieDescription = main.MovieDescription;
      this.MovieBoxOffice = main.MovieBoxOffice;
      this.MovieStarring = main.MovieStarring;
      this.MovieDirector = main.MovieDirector;
      this.mainSurce = this.url + main.MovieTrailer;
      const player = this.elRef.nativeElement.querySelector('video');
      player.load();
    });
    this.user.Code.subscribe((code) => this.Code = code);
    this.user.Email.subscribe((email) => this.Email = email);
    this.user.Fname.subscribe((fname) => this.Fname = fname);
    this.user.Lname.subscribe((lname) => this.Lname = lname);
    this.user.Role.subscribe((role) => {
      if (role === 'usr') {
        this.manager = false;
      } else {
        this.manager = true;
      }
    });
    this.user.isActive.subscribe((isAv) => {
      if (isAv === 'True') {
        this.Status = 'Active';
      } else {
        this.Status = 'Not Active';
      }
    });
    const estimate = new FormData();
    estimate.set('Code', this.Code);
    this.analytic.getEstimates(estimate).subscribe((est) => {
      this.estimates = est;
    });
    const recomFD = new FormData();
    recomFD.set('Data', JSON.stringify(this.estimates));
    this.movies.getEstimates(recomFD).subscribe((recom) => {
      this.Recommended = recom;
      if (this.Recommended === null) {
        this.ngOnInit();
      }
    });
  }
  goBrowse() {
    this.router.navigate(['/browse']);
    this.isProfile = false;
    this.isUpload = false;
    this.isMyList = false;
    this.isSearch = false;
    this.ngOnInit();
  }
  goWatch() {
    this.watch.movieUrl.next(this.mainSurce);
    this.shared.isBrowse.next(false);
    this.shared.isWatch.next(true);
    this.router.navigate(['/watch']);
  }
  videoStream(movie: Movies) {
    this.mainSurce = this.url + movie.MovieTrailer;
    this.MovieName = movie.MovieName;
    this.MovieDescription = movie.MovieDescription;
    this.MovieBoxOffice = movie.MovieBoxOffice;
    this.MovieStarring = movie.MovieStarring;
    this.MovieDirector = movie.MovieDirector;
    const player = this.elRef.nativeElement.querySelector('video');
    player.load();
  }
  videoMute(video: HTMLVideoElement) {

    if (video.muted === true) {
        this.unmute = false;
        this.mute = true;
        video.muted = false;
    } else {
        video.muted = true;
        this.unmute = true;
        this.mute = false;
   }
  }
  profileBtn() {
    if (this.isProfile === false) {
      this.isProfile = true;
    } else {
      this.isProfile = false;
    }
    this.isUpload = false;
    this.isMyList = false;
    this.isSearch = false;
  }
  uploadBtn() {
    if (this.isUpload === false) {
      this.isUpload = true;
    } else {
      this.isUpload = false;
    }
    this.isProfile = false;
    this.isMyList = false;
    this.isSearch = false;
  }
  listBtn() {
    this.isProfile = false;
    this.isUpload = false;
    if (this.isMyList === false) {
      this.isMyList = true;
    } else {
      this.isMyList = false;
    }
    this.isSearch = false;
  }
  searchBtn() {
    this.isProfile = false;
    this.isUpload = false;
    this.isMyList = false;
    this.isSearch = true;
    const searchFD = new FormData();
    searchFD.set('word', this.search);
    this.movies.searchMovie(searchFD).subscribe((resp) => this.SearchRES = resp);
    console.log(this.SearchRES);
  }
  searchShow(movie: Movies) {
    this.isProfile = false;
    this.isUpload = false;
    this.isMyList = false;
    this.isSearch = false;
    this.mainSurce = this.url + movie.MovieTrailer;
    this.MovieName = movie.MovieName;
    this.MovieDescription = movie.MovieDescription;
    this.MovieBoxOffice = movie.MovieBoxOffice;
    this.MovieStarring = movie.MovieStarring;
    this.MovieDirector = movie.MovieDirector;
    const player = this.elRef.nativeElement.querySelector('video');
    player.load();
  }
  signOut() {
    this.shared.isAuth.next(false);
    this.router.navigate(['/']);
    this.shared.isBrowse.next(false);
    this.shared.isMain.next(true);
  }
}
