import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-newest-horror-anime-movie',
  templateUrl: './newest-horror-anime-movie.component.html',
  styleUrls: ['./newest-horror-anime-movie.component.scss']
})
export class NewestHorrorAnimeMovieComponent implements OnInit {

  newest_horror_anime_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getNewestHorrorAnimeMovie();
  }

  getNewestHorrorAnimeMovie(): any {
      return this.film.getNewestAnimeHorrorMovie().subscribe(data => {
          this.newest_horror_anime_movies = data.data.movies;
      });
  }

}
