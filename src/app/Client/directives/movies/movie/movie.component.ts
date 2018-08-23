import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  newestfilms: any;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
      this.getNewestFilm();
  }

  getNewestFilm(): any {
      return this.filmService.getNewestFilm().subscribe(data => {
          this.newestfilms = data.data.newestfilms;
          console.log(this.newestfilms);
      });
  }

}
