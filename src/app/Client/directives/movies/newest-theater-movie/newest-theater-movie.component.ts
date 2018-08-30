import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-newest-theater-movie',
  templateUrl: './newest-theater-movie.component.html',
  styleUrls: ['./newest-theater-movie.component.scss']
})
export class NewestTheaterMovieComponent implements OnInit {


  newest_theater_movies: any;

  constructor(private film: FilmService) { }

  ngOnInit() {
    this.getNewestTheaterMovie();
  }

  getNewestTheaterMovie(): any {
    return this.film.getNewestTheaterMovie().subscribe(data => {
      this.newest_theater_movies = data.data.movies;
    });
  }


}
