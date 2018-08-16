import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

    animes: any[] = [
        {'Id': 1, 'name': 'Robot đại chiến 5: Chiến binh cuối cùng', 'el_name': 'Transformers 5: The Last Knight', 'image': '../../../assets/images/films/db0835d9ac4807b225dee26701f8e1b7.jpg', 'viewer': 12.000, 'review': [false, false, true, true, true]},
        {'Id': 2, 'name': 'giải mã mê cung: Lối thoát tử thần', 'el_name': 'Maze Runner: The Death Cure', 'image': '../../../assets/images/films/360_xxx/giai_ma_me_cung_loi_thoat_tu_than.png', 'viewer': 923.123, 'review': [true, true, true, true, true]},
        {'Id': 3, 'name': 'Người đẹp và thủy quái', 'el_name': 'The Shape Of Water', 'image': '../../../assets/images/films/360_xxx/nguoi_dep_va_thuy_quai.png', 'viewer': 734.123, 'review': [true, true, true, true, true]},
        {'Id': 4, 'name': 'Bậc Thầy của những ước mơ', 'el_name': 'The Greatest Showman', 'image': '../../../assets/images/films/360_xxx/bac_thay_cua_nhung_uoc_mo.png', 'viewer': 734.123, 'review': [true, true, true, true, true]},
        {'Id': 5, 'name': 'Chiến binh báo đen', 'el_name': 'Black Panther', 'image': '../../../assets/images/films/360_xxx/chien_binh_bao_den.png', 'viewer': 734.123, 'review': [true, true, true, true, true]},
        {'Id': 6, 'name': 'Thứ 6 ngày 13', 'el_name': 'Friday the 13th', 'image': '../../../assets/images/films/360_xxx/thu6_ngay13.png', 'viewer': 734.123, 'review': [true, true, true, true, true]},
        {'Id': 7, 'name': 'Nhiệm vụ bất khả thi phần 6', 'el_name': 'Mission Impossible season 6 ', 'image': '../../../assets/images/films/360_xxx/nhiem_vu_bat_kha_thi_6.png', 'viewer': 734.123, 'review': [true, true, true, true, true]},
        {'Id': 8, 'name': 'Phát súng cuối cùng', 'el_name': 'Jack Reacher', 'image': '../../../assets/images/films/360_xxx/phat_sung_cuoi_cung.png', 'viewer': 734.123, 'review': [true, true, true, true, true]},
    ];
  constructor() { }

  ngOnInit() {
  }

}
