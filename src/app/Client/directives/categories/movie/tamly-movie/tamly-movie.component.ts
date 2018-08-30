import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-tamly-movie',
  templateUrl: './tamly-movie.component.html',
  styleUrls: ['./tamly-movie.component.scss']
})
export class TamlyMovieComponent implements OnInit {

  highlight_drama_movies: any;

  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getHighlightDramaMovie();
  }

  getHighlightDramaMovie(): any {
      return this.film.getHighlightDramaMovie().subscribe(data => {
          this.highlight_drama_movies = data.data.movies;
      });
  }
}
