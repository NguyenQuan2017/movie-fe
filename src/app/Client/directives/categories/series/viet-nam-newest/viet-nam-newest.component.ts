import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-viet-nam-newest',
  templateUrl: './viet-nam-newest.component.html',
  styleUrls: ['./viet-nam-newest.component.scss']
})
export class VietNamNewestComponent implements OnInit {

    vietnam_newest_movies: any;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
      this.getNewestVietnamMovie();
  }

  getNewestVietnamMovie(): any {
      return this.filmService.getNewestVietNamSeriesMovie().subscribe(data => {
          this.vietnam_newest_movies = data.data.movies;
      });
  }

}
