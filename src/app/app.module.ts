import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './directives/headers/web/header/header.component';
import { HeaderPhoneComponent } from './directives/headers/phone/header-phone/header-phone.component';
import { CarouselComponent } from './directives/carousels/carousel/carousel.component';
import {NgxCarouselModule} from 'ngx-carousel';
import { SeriesFilmComponent } from './directives/movies/series-movie/series-film.component';
import { MovieComponent } from './directives/movies/movie/movie.component';
import { TheaterMoviesComponent } from './directives/movies/theater-movies/theater-movies.component';
import { AppRoutingModule } from './app-routing.module';
import { TabSeriesMovieComponent } from './directives/tabs/tab-series-movie/tab-series-movie.component';
import { TabsComponent } from './directives/tabs/tabs/tabs.component';
import { TabMovieComponent } from './directives/tabs/tab-movie/tab-movie.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { TabTrailerComponent } from './directives/tabs/tab-trailer/tab-trailer.component';
import { TagComponent } from './directives/tags/tag/tag.component';
import { SocialComponent } from './directives/socials/social/social.component';
import { FooterComponent } from './directives/footer/footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeaderPhoneComponent,
    CarouselComponent,
    SeriesFilmComponent,
    MovieComponent,
    TheaterMoviesComponent,
    TabSeriesMovieComponent,
    TabsComponent,
    TabMovieComponent,
    TabTrailerComponent,
    TagComponent,
    SocialComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgxCarouselModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule

  ],
  exports: [
      MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
