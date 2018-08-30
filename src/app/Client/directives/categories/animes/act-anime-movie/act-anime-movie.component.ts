import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-act-anime-movie',
  templateUrl: './act-anime-movie.component.html',
  styleUrls: ['./act-anime-movie.component.scss']
})
export class ActAnimeMovieComponent implements OnInit {

  highlight_anime_action_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getHighlightAnimeActionMovie();
  }

  getHighlightAnimeActionMovie(): any {
      return this.film.getHighlightAnimeActionMovie().subscribe(data => {
          this.highlight_anime_action_movies = data.data.movies;
      });
  }
}
