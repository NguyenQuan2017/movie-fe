import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-sci-fi-anime-movie',
  templateUrl: './sci-fi-anime-movie.component.html',
  styleUrls: ['./sci-fi-anime-movie.component.scss']
})
export class SciFiAnimeMovieComponent implements OnInit {

  highlight_sci_fi_anime_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getHighlightScienceFictionAnimeMovie();
  }

  getHighlightScienceFictionAnimeMovie(): any {
      return this.film.getHighlightAnimeScienceFictionMovie().subscribe(data => {
          this.highlight_sci_fi_anime_movies = data.data.movies;
      });
  }

}
