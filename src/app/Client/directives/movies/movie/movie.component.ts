import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  highlight_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getNewestFilm();
  }

  getNewestFilm(): any {
      return this.film.getHighlight().subscribe(data => {
          this.highlight_movies = data.data.movies;
          // console.log(this.newestfilms);
      });
  }

}
