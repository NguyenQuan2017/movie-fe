import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-horror-anime-movie',
  templateUrl: './horror-anime-movie.component.html',
  styleUrls: ['./horror-anime-movie.component.scss']
})
export class HorrorAnimeMovieComponent implements OnInit {

  highlight_horror_anime_movies: any;
  constructor(private  film: FilmService) { }

  ngOnInit() {
      this.getHighlightHorrorAnimeMovie();
  }

  getHighlightHorrorAnimeMovie(): any {
      return this.film.getHighlightAnimeHorrorMovie().subscribe(data => {
          this.highlight_horror_anime_movies = data.data.movies;
      });
  }

}
