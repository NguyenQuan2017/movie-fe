import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-newest-us-movie',
  templateUrl: './newest-us-movie.component.html',
  styleUrls: ['./newest-us-movie.component.scss']
})
export class NewestUsMovieComponent implements OnInit {

  newest_us_movies: any;
  constructor(private filmServices: FilmService) { }

  ngOnInit() {
      this.getNewestUsaSeriesMovie();
  }
  getNewestUsaSeriesMovie(): any {
      return this.filmServices.getNewestUsaSeriesMovie().subscribe(data => {
          this.newest_us_movies = data.data.movies;
      });
  }
}
