import { Component, OnInit } from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images: string[];
  public carouselTileOneItems: Array<any> = [];
  public carouselTileOne: NgxCarousel;



  constructor() { }

  ngOnInit() {
    this.images = [
        'assets/images/films/360_xxx/bac_thay_cua_nhung_uoc_mo.png',
        'assets/images/films/360_xxx/chien_binh_bao_den.png',
        'assets/images/films/360_xxx/giai_ma_me_cung_loi_thoat_tu_than.png',
        'assets/images/films/360_xxx/nguoi_dep_va_thuy_quai.png',
        'assets/images/films/360_xxx/nhiem_vu_bat_kha_thi_6.png',
        'assets/images/films/360_xxx/phat_sung_cuoi_cung.png',
        'assets/images/films/360_xxx/thu6_ngay13.png',
    ];

      this.carouselTileOne = {
          grid: { xs: 2, sm: 3, md: 4, lg: 4, all: 0 },

          speed: 600,
          interval: 3000,
          point: {
              visible: true,
              pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            background: #f5e458;
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              border: 2px solid rgb(245, 228, 88);
              transform: scale(1.2);
              background: transparent;
            }
        `
          },
          load: 1,
          loop: true,
          touch: true,
          easing: 'cubic-bezier(0, 0, 0.2, 1)',
          animation: 'lazy'
      };

      this.carouselTileOneLoad();
  }

    public carouselTileOneLoad() {
        const len = this.carouselTileOneItems.length;
        if (len <= 5) {
            for (let i = len; i < len + 5; i++) {
                this.carouselTileOneItems.push(
                    this.images[i]
                );
            }
        }
    }
}
