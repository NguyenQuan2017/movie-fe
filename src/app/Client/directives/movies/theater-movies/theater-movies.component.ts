import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-theater-movies',
  templateUrl: './theater-movies.component.html',
  styleUrls: ['./theater-movies.component.scss']
})
export class TheaterMoviesComponent implements OnInit {

  highlight_theater_movies: any;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
      this.getTheaterFilm();
  }

  getTheaterFilm(): any {
        return this.filmService.getHighlightTheaterMovie().subscribe(data => {
            this.highlight_theater_movies = data.data.movies;
        });
  }

}
