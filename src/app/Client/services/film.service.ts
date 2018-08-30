import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  readonly  rootUrl = 'http://movieserver.localhost:8081/api/public/';
  constructor(private  http: HttpClient) { }

  getHighLightFilm(): any {
    return this.http.get(this.rootUrl + 'film/highlight');
  }
  getHighLightFilmFirst(): any {
    return this.http.get(this.rootUrl + 'film/highlight/first');
  }

  getFilmInformation(nameFilm): any {
    return this.http.get(this.rootUrl + 'film/information/' + nameFilm);
  }

  getRelatedFilm(slug): any {
    return this.http.get(this.rootUrl + 'film/related/' + slug);
  }

  getVideoFilm(slug): any {
    return this.http.get(this.rootUrl + 'film/video/' + slug);
  }
  // get series movies
  getHighLightSeriesMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-bo/highlight');
  }

  getNewestSeriesMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-bo/newest');
  }

  getNewestUsaSeriesMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-bo/newest-usa');
  }

  getHighlightUsaSeriesMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-bo/highlight-usa');
  }

  getNewestKoreaSeriesMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-bo/newest-korea');
  }

  getHighlightKoreaSeriesMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-bo/highlight-korea');
  }

  getHighlightThailanSeriesMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-bo/highlight-thailan');
  }

  getNewestThailanSeriesMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-bo/newest-thailan');
  }

  getHighLightVietnamSeriesMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-bo/highlight-vietnam');
  }

  getNewestVietNamSeriesMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-bo/newest-vietnam');
  }

  getHighlightChinaSeriesMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-bo/highlight-china');
  }

  getNewestChinaSeriesMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-bo/newest-china');
  }

  // get movies

  getNewestMovie(): any {
      return this.http.get(this.rootUrl + 'film/phim-le/newest');
  }

  getHighlight(): any {
    return this.http.get(this.rootUrl + 'film/phim-le/highlight');
  }

  getHighlightActionMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-le/highlight-action');
  }

  getNewestActionMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-le/newest-action');
  }

  getHighlightHorrorMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-le/highlight-horror');
  }

  getNewestHorrorMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-le/newest-horror');
  }

  getHighlightDramaMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-le/highlight-drama');
  }

  getNewestDramaMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-le/newest-drama');
  }

  getHighlightScienceFictionMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-le/highlight-science-fiction');
  }

  getNewestScienceFictionMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-le/newest-science-fiction');
  }

  // get theater movie

  getNewestTheaterMovie(): any {
      return this.http.get(this.rootUrl + 'film/phim-chieu-rap/newest');
  }

  getHighlightTheaterMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-chieu-rap/highlight');
  }

  getHighlightKoreaTheaterMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-chieu-rap/highlight-korea');
  }

  getNewestKoreaTheaterMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-chieu-rap/newest-korea');
  }

  getHighlightVnTheaterMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-chieu-rap/highlight-vn');
  }

  getNewestVnTheaterMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-chieu-rap/newest-vn');
  }

  getHighlightUsaTheaterMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-chieu-rap/highlight-usa');
  }

  getNewestUsaTheaterMovie(): any {
    return this.http.get(this.rootUrl + 'film/phim-chieu-rap/newest-usa');
  }

  // get anime movie

  getNewestAnimeMovie(): any {
    return this.http.get(this.rootUrl + 'film/anime/newest');
  }

  getHighlightAnimeMovie(): any {
    return this.http.get(this.rootUrl + 'film/anime/highlight');
  }

  getHighlightAnimeActionMovie(): any {
    return this.http.get(this.rootUrl + 'film/anime/highlight-action');
  }

  getNewestAnimeActionMovie(): any {
    return this.http.get(this.rootUrl + 'film/anime/newest-action');
  }

  getHighlightAnimeHorrorMovie(): any {
    return this.http.get(this.rootUrl + 'film/anime/highlight-horror');
  }

  getNewestAnimeHorrorMovie(): any {
    return this.http.get(this.rootUrl + 'film/anime/newest-horror');
  }

  getHighlightAnimeScienceFictionMovie(): any {
    return this.http.get(this.rootUrl + 'film/anime/highlight-sci-fi');
  }

  getNewestAnimeScienceFictionMovie(): any {
    return this.http.get(this.rootUrl + 'film/anime/newest-sci-fi');
  }
}
