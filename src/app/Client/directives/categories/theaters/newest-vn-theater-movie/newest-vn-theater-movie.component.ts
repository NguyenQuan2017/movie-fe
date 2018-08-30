import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-newest-vn-theater-movie',
  templateUrl: './newest-vn-theater-movie.component.html',
  styleUrls: ['./newest-vn-theater-movie.component.scss']
})
export class NewestVnTheaterMovieComponent implements OnInit {

  newest_vn_theater_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getNewestVnTheaterMovie();
  }

  getNewestVnTheaterMovie(): any {
      return this.film.getNewestVnTheaterMovie().subscribe(data => {
          this.newest_vn_theater_movies = data.data.movies;
      });
  }
}
