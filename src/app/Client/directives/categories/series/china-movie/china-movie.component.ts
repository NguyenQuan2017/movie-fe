import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-china-movie',
  templateUrl: './china-movie.component.html',
  styleUrls: ['./china-movie.component.scss']
})
export class ChinaMovieComponent implements OnInit {

  highlight_china_movies: any;

  constructor(private  filmService: FilmService) { }

  ngOnInit() {
    this.getHighlightChinaMovie();
  }

  getHighlightChinaMovie() {
    return this.filmService.getHighlightChinaSeriesMovie().subscribe(data => {
      this.highlight_china_movies = data.data.movies;
    });
  }

}
