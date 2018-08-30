import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../../services/film.service';

@Component({
  selector: 'app-vientuong-newest',
  templateUrl: './vientuong-newest.component.html',
  styleUrls: ['./vientuong-newest.component.scss']
})
export class VientuongNewestComponent implements OnInit {

  newest_sci_fi_movies: any;
  constructor(private film: FilmService) { }

  ngOnInit() {
      this.getNewestScienceFictionMovie();
  }

  getNewestScienceFictionMovie() {
      this.film.getNewestScienceFictionMovie().subscribe(data => {
          this.newest_sci_fi_movies = data.data.movies;
      });
  }

}
