import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vn-theater-movie',
  templateUrl: './vn-theater-movie.component.html',
  styleUrls: ['./vn-theater-movie.component.scss']
})
export class VnTheaterMovieComponent implements OnInit {

    vn_theater_movies: any[] = [
        {'Id': 1, 'name': 'Chiến binh báo đen', 'el_name': 'Black Panther', 'image': '../../../assets/images/films/360_xxx/chien_binh_bao_den.png', 'viewer': 734.123, 'review': [true, true, true, true, true]},
        {'Id': 2, 'name': 'Thứ 6 ngày 13', 'el_name': 'Friday the 13th', 'image': '../../../assets/images/films/360_xxx/thu6_ngay13.png', 'viewer': 734.123, 'review': [true, true, true, true, true]},
        {'Id': 3, 'name': 'Nhiệm vụ bất khả thi phần 6', 'el_name': 'Mission Impossible season 6 ', 'image': '../../../assets/images/films/360_xxx/nhiem_vu_bat_kha_thi_6.png', 'viewer': 734.123, 'review': [true, true, true, true, true]},
        {'Id': 4, 'name': 'Phát súng cuối cùng', 'el_name': 'Jack Reacher', 'image': '../../../assets/images/films/360_xxx/phat_sung_cuoi_cung.png', 'viewer': 734.123, 'review': [true, true, true, true, true]},
    ];
  constructor() { }

  ngOnInit() {
  }

}
