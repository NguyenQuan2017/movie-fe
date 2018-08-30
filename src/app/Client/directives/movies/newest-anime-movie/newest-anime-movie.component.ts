import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-newest-anime-movie',
  templateUrl: './newest-anime-movie.component.html',
  styleUrls: ['./newest-anime-movie.component.scss']
})
export class NewestAnimeMovieComponent implements OnInit {

  newest_animes: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getNewestAnimesMovie();
  }

  getNewestAnimesMovie(): any {
      return this.film.getNewestAnimeMovie().subscribe(data => {
          this.newest_animes = data.data.movies;
      });
  }

}
