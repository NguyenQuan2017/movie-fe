import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-newest-china-movie',
  templateUrl: './newest-china-movie.component.html',
  styleUrls: ['./newest-china-movie.component.scss']
})
export class NewestChinaMovieComponent implements OnInit {

  newest_china_movies: any;

  constructor(private film: FilmService) { }

  ngOnInit() {
    this.getNewestChinaMovie();
  }

  getNewestChinaMovie(): any {
    return this.film.getNewestChinaSeriesMovie().subscribe(data => {
      this.newest_china_movies = data.data.movies;
    });
  }

}
