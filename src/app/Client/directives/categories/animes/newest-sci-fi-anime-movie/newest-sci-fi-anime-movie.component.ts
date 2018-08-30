import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-newest-sci-fi-anime-movie',
  templateUrl: './newest-sci-fi-anime-movie.component.html',
  styleUrls: ['./newest-sci-fi-anime-movie.component.scss']
})
export class NewestSciFiAnimeMovieComponent implements OnInit {

  newest_sci_fi_anime_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getNewestScienceFictionAnimeMovie();
  }

  getNewestScienceFictionAnimeMovie(): any {
      return this.film.getNewestAnimeScienceFictionMovie().subscribe(data => {
          this.newest_sci_fi_anime_movies = data.data.movies;
      });
  }

}
