import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-thai-lan-newest-movie',
  templateUrl: './thai-lan-newest-movie.component.html',
  styleUrls: ['./thai-lan-newest-movie.component.scss']
})
export class ThaiLanNewestMovieComponent implements OnInit {

    newest_thailan_movies: any;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
      this.getNewestThailanSeriesMovie();
  }

  getNewestThailanSeriesMovie(): any {
      return this.filmService.getNewestThailanSeriesMovie().subscribe(data => {
          this.newest_thailan_movies = data.data.movies;
      });
  }

}
