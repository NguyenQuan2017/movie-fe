import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-korea-theater-movie',
  templateUrl: './korea-theater-movie.component.html',
  styleUrls: ['./korea-theater-movie.component.scss']
})
export class KoreaTheaterMovieComponent implements OnInit {

  highlight_korea_theater_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getHighlightKoreaTheaterMovie();
  }

  getHighlightKoreaTheaterMovie(): any {
      return this.film.getHighlightKoreaTheaterMovie().subscribe(data => {
          this.highlight_korea_theater_movies = data.data.movies;
      });
  }

}
