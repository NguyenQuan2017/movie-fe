import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {range} from 'rxjs';
import {VideoService} from '../../../services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  animations: [
      // Define animation
      trigger('toggleAction', [
          state('small', style({ height: '0'})),
          state('large', style(
              {
                  height: 'auto',
                  width: '100%',
                  padding: '10px',
              }
          )),
          transition('small <=> large', animate('500ms ease-in'))
      ]),
      trigger( 'toggleHistory', [
          state('hidden', style({ height: '0'})),
          state('show', style({ height: 'auto', width: '100%'})),
          transition('hidden <=> show', animate('400ms ease-in'))
      ]),
  ]
})
export class VideoComponent implements OnInit {
  state = 'small';
  state_1 = 'hidden';
  histories: any;
  videos: any;
  limit = 150;
  clicked = false;
  films: any;
  episodes = [];
  i: number;
  actors: any;
  editIndex: number;
  is_edit = false;
  VideoForm: FormGroup;
  title: FormControl;
  link_video: FormControl;
  link_trailer: FormControl;
  episodeNumber: FormControl;
  filmName: FormControl;
  constructor(private fb: FormBuilder, private videoServices: VideoService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.createFormControls();
    this.createdForm();
    this.createEpisode();
    this.getListFilm();
    this.getListVideo();
  }

  toggleAction() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }

  toggleHistory() {
      this.state_1 = (this.state_1 === 'hidden' ? 'show' : 'hidden');
  }

  show() {
      this.state = 'large';
  }

  createFormControls() {
      this.title = new FormControl('', Validators.required);
  }

  createdForm() {
      this.VideoForm = this.fb.group({
          title: this.title,
          link_video: this.link_video,
          link_trailer: this.link_trailer,
          episodeNumber: this.episodeNumber,
          filmName: this.filmName,
          image: null
      });
  }

  createEpisode() {
    for (this.i = 1; this.i <= 500; this.i++) {
      this.episodes.push(this.i);
    }
  }

  getListFilm(): any {
    return this.videoServices.getListFilm().subscribe(data => {
      this.films = data.data.films['data'];
    });
  }

  getListVideo(): any {
    return this.videoServices.getListVideo().subscribe(data => {
      this.videos = data.data.videos;
    });
  }

  onSelectedFile(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);

        reader.onload = () => {
            this.VideoForm.patchValue({
                image: reader.result
            });
            this.cd.markForCheck();
        };
    }
  }

  AddVideoSubmit() {
    return this.videoServices.createVideo(this.VideoForm.value).subscribe(data => {
      this.getListVideo();
    });
  }

  editVideo(video, id) {
      this.clicked = true;
      this.editIndex = id;
      this.VideoForm.patchValue({
          title: video.title,
          link_video: video.link_video,
          link_trailer: video.link_trailer,
          episodeNumber: video.episode,
          filmName: video.film_id,
      });
      this.show();
  }

}
