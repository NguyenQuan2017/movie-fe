import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-viet-nam-movie',
  templateUrl: './viet-nam-movie.component.html',
  styleUrls: ['./viet-nam-movie.component.scss']
})
export class VietNamMovieComponent implements OnInit {

    vietnam_newest_movies: any;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
      this.getHighlightVietNamMovie();
  }

  getHighlightVietNamMovie(): any {
      return this.filmService.getHighLightVietnamSeriesMovie().subscribe(data => {
          this.vietnam_newest_movies = data.data.movies;
      });
  }

}
