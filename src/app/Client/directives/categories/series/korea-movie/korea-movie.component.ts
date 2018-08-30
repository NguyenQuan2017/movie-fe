import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-korea-movie',
  templateUrl: './korea-movie.component.html',
  styleUrls: ['./korea-movie.component.scss']
})
export class KoreaMovieComponent implements OnInit {

    korea_movies: any;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
      this.getHighlightKorea();
  }

  getHighlightKorea() {
      return this.filmService.getHighlightKoreaSeriesMovie().subscribe(data => {
        this.korea_movies = data.data.movies;
      });
  }
}
