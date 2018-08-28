import {Component, Directive, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmService} from '../../services/film.service';

declare var jwplayer: any;
// export  interface  IMedia {
//   id: number;
//   title: string;
//   link_video: string;
//   type: string;
// }

@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  styleUrls: ['./video-playlist.component.scss']
})

export class VideoPlaylistComponent implements OnInit {
    slug: string;
    videos: any;
    poster: any;
    file: string;

    // playlist: Array<IMedia> = [
    //     {
    //         id: 1,
    //         title: 'Pale Blue Dot',
    //         src: 'http://static.videogular.com/assets/videos/videogular.mp4',
    //         type: 'video/mp4'
    //     },
    //     {
    //         id: 2,
    //         title: 'Big Buck Bunny',
    //         src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
    //         type: 'video/mp4'
    //     },
    //     {
    //         id: 3,
    //         title: 'Elephants Dream',
    //         src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
    //         type: 'video/mp4'
    //     },
    //     {
    //         id: 4,
    //         title: 'Elephants Dream',
    //         src: 'assets/video/SampleVideo_1280x720_1mb.mp4',
    //         type: 'video/mp4'
    //     },
    //     {
    //         id: 5,
    //         title: 'Elephants Dream',
    //         src: 'assets/video/SampleVideo_1280x720_1mb.mp4',
    //         type: 'video/mp4'
    //     }
    // ];
    currentItem: any = {
        link_video: '',
    };
    currentIndex = 0;

    constructor(private activatedRoute: ActivatedRoute, private filmService: FilmService, private _element: ElementRef) {
        this.slug = this.activatedRoute.snapshot.paramMap.get('name_film');
    }

  ngOnInit() {
        console.log(this.currentItem);
      this.getVideoFilm();
      jwplayer('player').setup({
          title: '',
          file: 'http://example.com/myVideo.mp4',
          width: 1140,
          height: 500,
          aspectratio: '16:9',
          allowFullscreen: true,
          mute: false,
          autostart: true,
      });
  }


  getVideoFilm() {
    return this.filmService.getVideoFilm(this.slug).subscribe(data => {
        this.videos = data.data.film.videos;
        this.videos.forEach(video => {
            this.poster = video.poster;
        });
    });
  }

  onClickPlaylistItem(item, index) {
    this.currentIndex = index;
    this.currentItem = item;
    console.log(this.currentItem.link_video);
    jwplayer('player').setup({
      title: this.currentItem.title,
      sources: this.currentItem.sources,
      image: this.currentItem.poster,
      width: 1140,
      height: 600,
      aspectratio: '16:9',
      allowFullscreen: true,
      mute: false,
      autostart: true,
      primary: 'html5',
    });


  }



}
