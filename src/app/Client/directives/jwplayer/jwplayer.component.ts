import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {ActivatedRoute} from '@angular/router';
declare  var  jwplayer: any;
@Component({
  selector: 'app-jwplayer',
  templateUrl: './jwplayer.component.html',
  styleUrls: ['./jwplayer.component.scss']
})
export class JwplayerComponent implements OnInit {
  slug: string;
  videos: any;
  poster: any;
  file: string;
  constructor(private filmService: FilmService, private activatedRoute: ActivatedRoute) {
      this.slug = this.activatedRoute.snapshot.paramMap.get('name_film');
  }

  ngOnInit() {

    this.getVideoFilm();
  }

  getVideoFilm() {
      return this.filmService.getVideoFilm(this.slug).subscribe(data => {
          this.videos = data.data.film.videos;
          this.videos.forEach(video => {
              this.poster = video.poster;
          });
      });
  }

}
