import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-theater-movies',
  templateUrl: './theater-movies.component.html',
  styleUrls: ['./theater-movies.component.scss']
})
export class TheaterMoviesComponent implements OnInit {

  films: any;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
      this.getTheaterFilm();
  }

  getTheaterFilm(): any {
        return this.filmService.getTheaterFilm().subscribe(data => {
            this.films = data.data.films;
            console.log(this.films);
        });
  }

}
