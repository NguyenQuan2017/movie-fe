import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-kinhdi-movie',
  templateUrl: './kinhdi-movie.component.html',
  styleUrls: ['./kinhdi-movie.component.scss']
})
export class KinhdiMovieComponent implements OnInit {

  highlight_horror_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getHighlightHorrorMovies();
  }

  getHighlightHorrorMovies(): any {
      this.film.getHighlightHorrorMovie().subscribe(data => {
          this.highlight_horror_movies = data.data.movies;
      });
  }
}
