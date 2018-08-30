import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-thai-lan-movie',
  templateUrl: './thai-lan-movie.component.html',
  styleUrls: ['./thai-lan-movie.component.scss']
})
export class ThaiLanMovieComponent implements OnInit {

    thailan_movies: any;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
      this.getHighlightThailanMovie();
  }

  getHighlightThailanMovie(): any {
      return this.filmService.getHighlightThailanSeriesMovie().subscribe(data => {
          this.thailan_movies = data.data.movies;
      });
  }

}
