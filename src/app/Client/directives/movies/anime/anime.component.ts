import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  highlight_animes: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getHighlightAnimeMovie();
  }

  getHighlightAnimeMovie(): any {
      return this.film.getHighlightAnimeMovie().subscribe(data => {
          this.highlight_animes = data.data.movies;
      });
  }

}
