import { Component, OnInit } from '@angular/core';
export  interface  IMedia {
  id: number;
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  styleUrls: ['./video-playlist.component.scss']
})
export class VideoPlaylistComponent implements OnInit {

    playlist: Array<IMedia> = [
        {
            id: 1,
            title: 'Pale Blue Dot',
            src: 'http://static.videogular.com/assets/videos/videogular.mp4',
            type: 'video/mp4'
        },
        {
            id: 2,
            title: 'Big Buck Bunny',
            src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
            type: 'video/mp4'
        },
        {
            id: 3,
            title: 'Elephants Dream',
            src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
            type: 'video/mp4'
        },
        {
            id: 4,
            title: 'Elephants Dream',
            src: 'assets/video/SampleVideo_1280x720_1mb.mp4',
            type: 'video/mp4'
        },
        {
            id: 5,
            title: 'Elephants Dream',
            src: 'assets/video/SampleVideo_1280x720_1mb.mp4',
            type: 'video/mp4'
        }
    ];
    currentIndex = 0;
    currentItem: IMedia = this.playlist[ this.currentIndex ];

    onClickPlaylistItem(item: IMedia, index) {
        this.currentIndex = index;
        this.currentItem = item;
    }

    constructor() { }

  ngOnInit() {
  }


}
