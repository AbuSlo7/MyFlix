import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css', './browse.component.scss']
})
export class BrowseComponent implements OnInit {
  browse = false;
  constructor(private router: Router, private shared: SharedService) { }

  ngOnInit() {
    this.shared.isBrowse.subscribe((browse) => this.browse = browse);
    $('[href="#iui"]').click((e) => {
      e.preventDefault();
    });
  }
  goBrowse() {
    this.router.navigate(['/browse']);
  }
  goWatch() {
    this.shared.isBrowse.next(false);
    this.shared.isWatch.next(true);
    this.router.navigate(['/watch']);
  }
}
