import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MoviesDetailComponent} from './pages/movies-detail/movies-detail.component';
import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'chi-tiet', component: MoviesDetailComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule,
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
