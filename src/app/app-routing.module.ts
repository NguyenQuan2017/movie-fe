import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TabSeriesMovieComponent} from './tabs/tab-series-movie/tab-series-movie.component';
import {HomeComponent} from './pages/home/home.component';
import {TabMovieComponent} from './tabs/tab-movie/tab-movie.component';


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
