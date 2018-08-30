import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HomeComponent } from './Client/pages/home/home.component';
import { HeaderComponent } from './Client/directives/headers/web/header/header.component';
import { HeaderPhoneComponent } from './Client/directives/headers/phone/header-phone/header-phone.component';
import { CarouselComponent } from './Client/directives/carousels/carousel/carousel.component';
import {NgxCarouselModule} from 'ngx-carousel';
import { SeriesFilmComponent } from './Client/directives/movies/series-movie/series-film.component';
import { MovieComponent } from './Client/directives/movies/movie/movie.component';
import { TheaterMoviesComponent } from './Client/directives/movies/theater-movies/theater-movies.component';
import { AppRoutingModule } from './app.routing.module';
import { TabSeriesMovieComponent } from './Client/directives/tabs/tab-series-movie/tab-series-movie.component';
import { TabsComponent } from './Client/directives/tabs/tabs/tabs.component';
import { TabMovieComponent } from './Client/directives/tabs/tab-movie/tab-movie.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { TabTrailerComponent } from './Client/directives/tabs/tab-trailer/tab-trailer.component';
import { TagComponent } from './Client/directives/tags/tag/tag.component';
import { SocialComponent } from './Client/directives/socials/social/social.component';
import { FooterComponent } from './Client/directives/footer/footer/footer.component';
import { AnimeComponent } from './Client/directives/movies/anime/anime.component';
import { VideoPlaylistComponent } from './Client/directives/video-playlist/video-playlist.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { RelatedMovieComponent } from './Client/directives/movies/related-movie/related-movie.component';
import { WatchMovieComponent } from './Client/pages/watch-movie/watch-movie.component';
import { NewestSeriesMovieComponent } from './Client/directives/movies/newest-series-movie/newest-series-movie.component';
import { KoreaMovieComponent } from './Client/directives/categories/series/korea-movie/korea-movie.component';
import { NewestKoreaMovieComponent } from './Client/directives/categories/series/newest-korea-movie/newest-korea-movie.component';
import { UsMovieComponent } from './Client/directives/categories/series/us-movie/us-movie.component';
import { NewestUsMovieComponent } from './Client/directives/categories/series/newest-us-movie/newest-us-movie.component';
import { ThaiLanMovieComponent } from './Client/directives/categories/series/thai-lan-movie/thai-lan-movie.component';
import { ThaiLanNewestMovieComponent } from './Client/directives/categories/series/thai-lan-newest-movie/thai-lan-newest-movie.component';
import { PhimBoComponent } from './Client/pages/categories/phim-bo/phim-bo.component';
import { VietNamMovieComponent } from './Client/directives/categories/series/viet-nam-movie/viet-nam-movie.component';
import { VietNamNewestComponent } from './Client/directives/categories/series/viet-nam-newest/viet-nam-newest.component';
import { PhimLeComponent } from './Client/pages/categories/phim-le/phim-le.component';
import { NewestMovieComponent } from './Client/directives/movies/newest-movie/newest-movie.component';
import { HanhDongMovieComponent } from './Client/directives/categories/movie/hanh-dong-movie/hanh-dong-movie.component';
import { HanhDongNewestMovieComponent } from './Client/directives/categories/movie/hanh-dong-newest-movie/hanh-dong-newest-movie.component';
import { KinhdiMovieComponent } from './Client/directives/categories/movie/kinhdi-movie/kinhdi-movie.component';
import { KinhdiNewestMovieComponent } from './Client/directives/categories/movie/kinhdi-newest-movie/kinhdi-newest-movie.component';
import { TamlyNewestMovieComponent } from './Client/directives/categories/movie/tamly-newest-movie/tamly-newest-movie.component';
import { TamlyMovieComponent } from './Client/directives/categories/movie/tamly-movie/tamly-movie.component';
import { VientuongMovieComponent } from './Client/directives/categories/movie/vientuong-movie/vientuong-movie.component';
import { VientuongNewestComponent } from './Client/directives/categories/movie/vientuong-newest/vientuong-newest.component';
import { PhimChieuRapComponent } from './Client/pages/categories/phim-chieu-rap/phim-chieu-rap.component';
import { UsNewestMovieComponent } from './Client/directives/categories/theaters/us-newest-movie/us-newest-movie.component';
import { NewestTheaterMovieComponent } from './Client/directives/movies/newest-theater-movie/newest-theater-movie.component';
import { TheaterUsMovieComponent } from './Client/directives/categories/theaters/theater-us-movie/theater-us-movie.component';
import { KoreaTheaterMovieComponent } from './Client/directives/categories/theaters/korea-theater-movie/korea-theater-movie.component';
import { NewestKoreaTheaterMovieComponent } from './Client/directives/categories/theaters/newest-korea-theater-movie/newest-korea-theater-movie.component';
import { NewestVnTheaterMovieComponent } from './Client/directives/categories/theaters/newest-vn-theater-movie/newest-vn-theater-movie.component';
import { VnTheaterMovieComponent } from './Client/directives/categories/theaters/vn-theater-movie/vn-theater-movie.component';
import { NewestAnimeMovieComponent } from './Client/directives/movies/newest-anime-movie/newest-anime-movie.component';
import { PhimHoatHinhComponent } from './Client/pages/categories/phim-hoat-hinh/phim-hoat-hinh.component';
import { ActAnimeMovieComponent } from './Client/directives/categories/animes/act-anime-movie/act-anime-movie.component';
import { NewestActAnimeMovieComponent } from './Client/directives/categories/animes/newest-act-anime-movie/newest-act-anime-movie.component';
import { NewestHorrorAnimeMovieComponent } from './Client/directives/categories/animes/newest-horror-anime-movie/newest-horror-anime-movie.component';
import { HorrorAnimeMovieComponent } from './Client/directives/categories/animes/horror-anime-movie/horror-anime-movie.component';
import { SciFiAnimeMovieComponent } from './Client/directives/categories/animes/sci-fi-anime-movie/sci-fi-anime-movie.component';
import { NewestSciFiAnimeMovieComponent } from './Client/directives/categories/animes/newest-sci-fi-anime-movie/newest-sci-fi-anime-movie.component';
import { GenreMovieComponent } from './Client/pages/genre-movie/genre-movie.component';
import { IndexComponent } from './Client/index/index.component';
import { AdminIndexComponent } from './Admin/admin-index/admin-index.component';
import { AdminComponent } from './Admin/pages/admin/admin.component';
import { SideBarComponent } from './Admin/directives/side-bar/side-bar.component';
import { HeaderAdminComponent } from './Admin/directives/header-admin/header-admin.component';
import { LoginComponent } from './Admin/pages/login/login.component';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {TokenService} from './Admin/services/token.service';
import {AuthGuard} from './Admin/auth/auth.guard';
import {AuthenticatedService} from './Admin/services/authenticated.service';
import {UserService} from './Admin/services/user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './Admin/helpers/jwt.interceptor';
import { UserComponent } from './Admin/pages/users/user/user.component';
import { CategoryComponent } from './Admin/pages/categories/category/category.component';
import { GenreComponent } from './Admin/pages/genres/genre/genre.component';
import { FilmComponent } from './Admin/pages/films/film/film.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import { ImageComponent } from './Admin/pages/films/image/image.component';
import { FilmsComponent } from './Admin/pages/films/films.component';
import { InformationComponent } from './Admin/pages/films/information/information.component';
import { PosterComponent } from './Admin/pages/films/poster/poster.component';
import { ActorComponent } from './Admin/pages/actors/actor/actor.component';
import { VideoComponent } from './Admin/pages/films/video/video.component';
import { JwplayerComponent } from './Client/directives/jwplayer/jwplayer.component';
import { CountryComponent } from './Admin/pages/country/country.component';
import { ChinaMovieComponent } from './Client/directives/categories/series/china-movie/china-movie.component';
import { NewestChinaMovieComponent } from './Client/directives/categories/series/newest-china-movie/newest-china-movie.component';

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
    AnimeComponent,
    VideoPlaylistComponent,
    RelatedMovieComponent,
    WatchMovieComponent,
    NewestSeriesMovieComponent,
    KoreaMovieComponent,
    NewestKoreaMovieComponent,
    UsMovieComponent,
    NewestUsMovieComponent,
    ThaiLanMovieComponent,
    ThaiLanNewestMovieComponent,
    PhimBoComponent,
    VietNamMovieComponent,
    VietNamNewestComponent,
    PhimLeComponent,
    NewestMovieComponent,
    HanhDongMovieComponent,
    HanhDongNewestMovieComponent,
    KinhdiMovieComponent,
    KinhdiNewestMovieComponent,
    TamlyNewestMovieComponent,
    TamlyMovieComponent,
    VientuongMovieComponent,
    VientuongNewestComponent,
    PhimChieuRapComponent,
    UsNewestMovieComponent,
    NewestTheaterMovieComponent,
    TheaterUsMovieComponent,
    KoreaTheaterMovieComponent,
    NewestKoreaTheaterMovieComponent,
    NewestVnTheaterMovieComponent,
    VnTheaterMovieComponent,
    NewestAnimeMovieComponent,
    PhimHoatHinhComponent,
    ActAnimeMovieComponent,
    NewestActAnimeMovieComponent,
    NewestHorrorAnimeMovieComponent,
    HorrorAnimeMovieComponent,
    SciFiAnimeMovieComponent,
    NewestSciFiAnimeMovieComponent,
    GenreMovieComponent,
    IndexComponent,
    AdminIndexComponent,
    AdminComponent,
    SideBarComponent,
    HeaderAdminComponent,
    LoginComponent,
    PageNotFoundComponent,
    UserComponent,
    CategoryComponent,
    GenreComponent,
    FilmComponent,
    ImageComponent,
    FilmsComponent,
    InformationComponent,
    PosterComponent,
    ActorComponent,
    VideoComponent,
    JwplayerComponent,
    CountryComponent,
    ChinaMovieComponent,
    NewestChinaMovieComponent,
  ],
  imports: [
    BrowserModule,
    NgxCarouselModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
  ],
  exports: [
      MatTabsModule
  ],
  providers: [
      AuthGuard,
      TokenService,
      AuthenticatedService,
      UserService,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
