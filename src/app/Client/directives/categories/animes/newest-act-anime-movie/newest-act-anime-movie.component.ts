import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-newest-act-anime-movie',
  templateUrl: './newest-act-anime-movie.component.html',
  styleUrls: ['./newest-act-anime-movie.component.scss']
})
export class NewestActAnimeMovieComponent implements OnInit {

  newest_act_anime_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getNewestActionAnimeMovie();
  }

  getNewestActionAnimeMovie(): any {
      return this.film.getNewestAnimeActionMovie().subscribe(data => {
          this.newest_act_anime_movies = data.data.movies;
      });
  }

}
