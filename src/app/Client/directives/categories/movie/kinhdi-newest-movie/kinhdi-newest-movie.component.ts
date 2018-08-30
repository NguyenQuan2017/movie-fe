import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-kinhdi-newest-movie',
  templateUrl: './kinhdi-newest-movie.component.html',
  styleUrls: ['./kinhdi-newest-movie.component.scss']
})
export class KinhdiNewestMovieComponent implements OnInit {

  newest_horror_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getNewestHorrorMovie();
  }

  getNewestHorrorMovie(): any {
      return this.film.getNewestHorrorMovie().subscribe(data => {
          this.newest_horror_movies = data.data.movies;
      });
  }

}
