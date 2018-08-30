import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-hanh-dong-movie',
  templateUrl: './hanh-dong-movie.component.html',
  styleUrls: ['./hanh-dong-movie.component.scss']
})
export class HanhDongMovieComponent implements OnInit {

  highlight_action_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getHighlightActionMovie();
  }

  getHighlightActionMovie(): any {
      return this.film.getHighlightActionMovie().subscribe(data => {
          this.highlight_action_movies = data.data.movies;
      });
  }

}
