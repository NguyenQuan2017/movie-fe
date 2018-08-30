import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-us-newest-movie',
  templateUrl: './us-newest-movie.component.html',
  styleUrls: ['./us-newest-movie.component.scss']
})
export class UsNewestMovieComponent implements OnInit {

  newest_theater_us_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getNewestUsaTheaterMovie();
  }

  getNewestUsaTheaterMovie(): any {
      return this.film.getNewestUsaTheaterMovie().subscribe(data => {
          this.newest_theater_us_movies = data.data.movies;
      });
  }

}
