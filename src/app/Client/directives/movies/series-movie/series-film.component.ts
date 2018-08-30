import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-series-film',
  templateUrl: './series-film.component.html',
  styleUrls: ['./series-film.component.scss']
})
export class SeriesFilmComponent implements OnInit {

  series_movies: any;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
      this.getListHighLightSeriesMovie();
  }

  getListHighLightSeriesMovie() {
      return this.filmService.getHighLightSeriesMovie().subscribe(data => {
          this.series_movies = data.data.movies;
      });
  }

}
