import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-vn-theater-movie',
  templateUrl: './vn-theater-movie.component.html',
  styleUrls: ['./vn-theater-movie.component.scss']
})
export class VnTheaterMovieComponent implements OnInit {

  highlight_vn_theater_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getHighlightVnTheaterMovie();
  }

  getHighlightVnTheaterMovie(): any {
      return this.film.getHighlightVnTheaterMovie().subscribe(data => {
          this.highlight_vn_theater_movies = data.data.movies;
      });
  }

}
