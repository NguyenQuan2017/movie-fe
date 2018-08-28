import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmService} from '../../services/film.service';


@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.scss']
})
export class WatchMovieComponent implements OnInit {
  name_film: string;
  film: any = {
    film_information: ''
  };
  constructor(private activatedRoute: ActivatedRoute, private filmService: FilmService) {
    this.name_film = this.activatedRoute.snapshot.paramMap.get('name_film');
  }

  ngOnInit() {
    this.getInformationFilm();
  }

  getInformationFilm(): any {

    return this.filmService.getFilmInformation(this.name_film).subscribe(data => {
      this.film = data.data.film;
      console.log(this.film);
    });
  }


}
