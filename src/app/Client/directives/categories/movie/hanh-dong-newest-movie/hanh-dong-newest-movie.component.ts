import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-hanh-dong-newest-movie',
  templateUrl: './hanh-dong-newest-movie.component.html',
  styleUrls: ['./hanh-dong-newest-movie.component.scss']
})
export class HanhDongNewestMovieComponent implements OnInit {

  newest_action_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getNewestActionMovie();
  }

  getNewestActionMovie(): any {
      return this.film.getNewestActionMovie().subscribe(data => {
          this.newest_action_movies = data.data.movies;
      });
  }
}
