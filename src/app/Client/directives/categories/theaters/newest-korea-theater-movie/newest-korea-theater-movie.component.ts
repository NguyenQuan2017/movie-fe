import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-newest-korea-theater-movie',
  templateUrl: './newest-korea-theater-movie.component.html',
  styleUrls: ['./newest-korea-theater-movie.component.scss']
})
export class NewestKoreaTheaterMovieComponent implements OnInit {

  newest_korea_theater_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getNewestKoreaTheaterMovie();
  }

  getNewestKoreaTheaterMovie(): any {
      return this.film.getNewestKoreaTheaterMovie().subscribe(data => {
          this.newest_korea_theater_movies = data.data.movies;
      });
  }

}
