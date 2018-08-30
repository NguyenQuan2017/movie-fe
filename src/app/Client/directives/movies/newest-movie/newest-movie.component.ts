import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-newest-movie',
  templateUrl: './newest-movie.component.html',
  styleUrls: ['./newest-movie.component.scss']
})
export class NewestMovieComponent implements OnInit {

    newest_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getNewestMovie();
  }

  getNewestMovie(): any {
      return this.film.getNewestMovie().subscribe(data => {
          this.newest_movies = data.data.movies;
      });
  }

}
