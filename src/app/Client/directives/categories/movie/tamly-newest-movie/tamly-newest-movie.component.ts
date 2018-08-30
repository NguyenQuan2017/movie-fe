import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-tamly-newest-movie',
  templateUrl: './tamly-newest-movie.component.html',
  styleUrls: ['./tamly-newest-movie.component.scss']
})
export class TamlyNewestMovieComponent implements OnInit {

  newest_drama_movies: any;

  constructor(private film: FilmService) { }

  ngOnInit() {
    this.getNewestDramaMovie();
  }

  getNewestDramaMovie(): any {
      return this.film.getNewestDramaMovie().subscribe(data => {
          this.newest_drama_movies = data.data.movies;
      });
  }

}
