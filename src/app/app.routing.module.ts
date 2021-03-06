import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './Client/pages/home/home.component';
import {WatchMovieComponent} from './Client/pages/watch-movie/watch-movie.component';
import {PhimBoComponent} from './Client/pages/categories/phim-bo/phim-bo.component';
import {PhimLeComponent} from './Client/pages/categories/phim-le/phim-le.component';
import {PhimChieuRapComponent} from './Client/pages/categories/phim-chieu-rap/phim-chieu-rap.component';
import {PhimHoatHinhComponent} from './Client/pages/categories/phim-hoat-hinh/phim-hoat-hinh.component';
import {GenreMovieComponent} from './Client/pages/genre-movie/genre-movie.component';
import {IndexComponent} from './Client/index/index.component';
import {AdminIndexComponent} from './Admin/admin-index/admin-index.component';
import {AdminComponent} from './Admin/pages/admin/admin.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './Admin/pages/login/login.component';
import {AuthGuard} from './Admin/auth/auth.guard';
import {UserComponent} from './Admin/pages/users/user/user.component';
import {CategoryComponent} from './Admin/pages/categories/category/category.component';
import {GenreComponent} from './Admin/pages/genres/genre/genre.component';
import {FilmComponent} from './Admin/pages/films/film/film.component';
import {ImageComponent} from './Admin/pages/films/image/image.component';
import {FilmsComponent} from './Admin/pages/films/films.component';
import {InformationComponent} from './Admin/pages/films/information/information.component';
import {PosterComponent} from './Admin/pages/films/poster/poster.component';
import {ActorComponent} from './Admin/pages/actors/actor/actor.component';
import {VideoComponent} from './Admin/pages/films/video/video.component';
import {CountryComponent} from './Admin/pages/country/country.component';


const routes: Routes = [
    { path: '', component: IndexComponent, children: [
            { path: '', component: HomeComponent},
            { path: 'xem-phim/:name_film', component: WatchMovieComponent},
            { path: 'danh-muc/phim-bo', component: PhimBoComponent },
            { path: 'danh-muc/phim-le', component: PhimLeComponent },
            { path: 'danh-muc/phim-chieu-rap', component: PhimChieuRapComponent },
            { path: 'danh-muc/anime', component: PhimHoatHinhComponent },
            { path: 'the-loai/:id/han-quoc', component: GenreMovieComponent },
            { path: '', redirectTo: '', pathMatch: 'full'},
        ] },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] , children: [
            { path: 'users', component: UserComponent},
            { path: 'categories', component: CategoryComponent},
            { path: 'genres', component: GenreComponent},
            { path: 'films', component: FilmsComponent, children: [
                { path: '', component: FilmComponent},
                { path: 'images', component: ImageComponent},
                { path: 'informations', component: InformationComponent},
                { path: 'poster', component: PosterComponent },
                { path: 'video', component: VideoComponent}
            ]},
            { path: 'actors', component: ActorComponent},
            { path: 'country', component: CountryComponent },
            { path: '', redirectTo: '', pathMatch: 'full'}
        ]},
    { path: 'admin/login', component: LoginComponent},
    { path: '**', component: PageNotFoundComponent},
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
