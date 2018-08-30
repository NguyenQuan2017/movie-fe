import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-vientuong-movie',
  templateUrl: './vientuong-movie.component.html',
  styleUrls: ['./vientuong-movie.component.scss']
})
export class VientuongMovieComponent implements OnInit {

   highlight_science_fiction_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getHighlightScienceFictionMovie();
  }

  getHighlightScienceFictionMovie(): any {
      return this.film.getHighlightScienceFictionMovie().subscribe(data => {
          this.highlight_science_fiction_movies = data.data.movies;
      });
  }

}
