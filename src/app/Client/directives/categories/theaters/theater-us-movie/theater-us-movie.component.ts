import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-theater-us-movie',
  templateUrl: './theater-us-movie.component.html',
  styleUrls: ['./theater-us-movie.component.scss']
})
export class TheaterUsMovieComponent implements OnInit {

  highlight_usa_theater_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getHighlightUsaTheaterMovie();
  }

  getHighlightUsaTheaterMovie(): any {
      return this.film.getHighlightUsaTheaterMovie().subscribe(data => {
          this.highlight_usa_theater_movies = data.data.movies;
      });
  }
}
