import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-newest-korea-movie',
  templateUrl: './newest-korea-movie.component.html',
  styleUrls: ['./newest-korea-movie.component.scss']
})
export class NewestKoreaMovieComponent implements OnInit {

    newest_korea_movies: any;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
      this.getNewestKorea();
  }

  getNewestKorea() {
      return this.filmService.getNewestKoreaSeriesMovie().subscribe(data => {
          this.newest_korea_movies = data.data.movies;
      });
  }

}
