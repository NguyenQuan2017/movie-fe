import { Component, OnInit } from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  films: any;
  item: any = {
    poster: [],
    film_name: '',
  };

  public carouselTileOneItems: Array<any> = [];
  public carouselTileOne: NgxCarousel;



  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
      this.getFilmHighLightFirst();
      this.getFilmHighLight();
  }

  getFilmHighLight(): any {
     this.filmService.getHighLightFilm().subscribe(data => {
        this.films = data.data.films;
     });
  }

  getFilmHighLightFirst(): any {
    this.filmService.getHighLightFilmFrist().subscribe(data => {
      this.item = data.data.film;
    });
  }
}


