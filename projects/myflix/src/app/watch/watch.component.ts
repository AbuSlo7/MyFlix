import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../shared.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  watch = false;
  time = 0;
  pos = 0;
  unmute = true;
  mute = false;
  currentVolume = 0;
  constructor(private router: Router, private shared: SharedService) {
  }

  ngOnInit() {
    this.shared.isWatch.subscribe((watch) => this.watch = watch);
  }

  togglplaypause(video: any, button: any, bar: any, progress: any) {
    progress.addEventListener('click', function(e) {
       this.pos = (e.pageX  - this.offsetLeft) / this.offsetWidth;
       video.currentTime = this.pos * video.duration;
    });
    video.addEventListener('timeupdate', function() {
      this.time = video.currentTime / video.duration;
      bar.style.width = this.time * 100 + '%';
      if (video.ended) {
        button.className = 'play';
      }
    });
    if (video.paused) {
      button.className = 'pause';
      video.play();
    } else {
      button.className = 'play';
      video.pause();    }
  }
  togglplaystop(video: HTMLVideoElement, button: HTMLButtonElement) {
      video.pause();
      video.currentTime = 0;
      document.getElementById('playID').className = 'play';
  }
  togglplaymute(video: HTMLVideoElement, button: HTMLButtonElement) {
    if (video.muted) {
        video.muted = false;
        this.unmute = true;
        this.mute = false;
    } else {
         video.muted = true;
         this.unmute = false;
         this.mute = true;    }
  }
  togglVolUp(video: HTMLVideoElement, button: HTMLButtonElement) {
    button.addEventListener('click', (e) => {
      this.alterVolume('+', video);
    });
  }

  togglVolDown(video: HTMLVideoElement, button: HTMLButtonElement) {
    button.addEventListener('click', (e) => {
      this.alterVolume('-', video);
    });
  }
   alterVolume(dir, video) {
    this.currentVolume = Math.floor(video.volume * 10) / 10;
    if (dir === '+') {
      if (this.currentVolume < 1) {video.volume += 0.1; }
    } else if (dir === '-') {
      if (this.currentVolume > 0) {video.volume -= 0.1; }
    }
  }

  togglFullScreen(video: HTMLVideoElement, videoContainer: any) {


  }

  goBack() {
    this.shared.isWatch.next(false);
    this.shared.isBrowse.next(true);
    this.router.navigate(['/browse']);
  }
}
