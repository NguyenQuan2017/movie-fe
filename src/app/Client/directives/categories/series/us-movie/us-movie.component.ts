import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-us-movie',
  templateUrl: './us-movie.component.html',
  styleUrls: ['./us-movie.component.scss']
})
export class UsMovieComponent implements OnInit {

   us_movies_highlight: any;

  constructor(private filmServie: FilmService) {
      this.getHighlightUsaSeries();
  }

  ngOnInit() {
  }

  getHighlightUsaSeries() {
      return this.filmServie.getHighlightUsaSeriesMovie().subscribe(data => {
        this.us_movies_highlight = data.data.movies;
      });
  }

}
