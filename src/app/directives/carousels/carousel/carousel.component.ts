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
        'assets/images/carousels/natural_scenery_02_hd_picture_166159.jpg',
        'assets/images/carousels/2cfb9d677ab170c0626a905ede783fb9.jpg',
        'assets/images/carousels/63766e5fa0394668d62b153086d035d5--nature-wallpaper-hd-wallpaper.jpg',
        'assets/images/carousels/a746f74e09c6684cf3542650e5bb8c4d.jpg',
        'assets/images/carousels/abe3ff36e5c5bfd564b3051b43dc3c44.jpg',
        'assets/images/carousels/Hd-Waterfall-3d-Live-4k-Wallpaper-480x600.jpeg',
        'assets/images/carousels/1.jpg',
        'assets/images/carousels/screen-0.jpg',
        'assets/images/carousels/2.jpg',
        'assets/images/carousels/big_sur-exposure.jpg',
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
            background: #6b6b6b;
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              border: 2px solid rgba(0, 0, 0, 0.55);
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
