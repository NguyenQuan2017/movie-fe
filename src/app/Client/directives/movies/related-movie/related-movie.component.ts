import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../services/film.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-related-movie',
  templateUrl: './related-movie.component.html',
  styleUrls: ['./related-movie.component.scss']
})
export class RelatedMovieComponent implements OnInit {

  slug: any;
  films: any;
  constructor(private filmService: FilmService, private activatedRoute: ActivatedRoute) {
      this.slug = this.activatedRoute.snapshot.paramMap.get('name_film');
  }

  ngOnInit() {
      this.getRelatedFilm();
  }

  reload() {
      location.reload();
  }
  getRelatedFilm(): any {
      return this.filmService.getRelatedFilm(this.slug).subscribe(data => {
          this.films = data.data.related;
      });
  }

}
