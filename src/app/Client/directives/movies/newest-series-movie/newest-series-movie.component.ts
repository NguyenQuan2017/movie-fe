import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-newest-series-movie',
  templateUrl: './newest-series-movie.component.html',
  styleUrls: ['./newest-series-movie.component.scss']
})
export class NewestSeriesMovieComponent implements OnInit {

    newest_series_movies: any;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
      this.getNewestSeriesMovie();
  }

  getNewestSeriesMovie(): any {
        return this.filmService.getNewestSeriesMovie().subscribe(data => {
            this.newest_series_movies = data.data.movies;
        });
  }
}
