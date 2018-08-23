import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PosterService} from '../../../services/poster.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
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
export class PosterComponent implements OnInit {

  state = 'small';
  state_1 = 'hidden';
  histories: any;
  clicked = false;
  posters: any;
  films: any;
  editIndex: number;
  PosterForm: FormGroup;
  imageName: FormControl;
  filmName: FormControl;
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, private posterService: PosterService) {
    this.createFormControls();
    this.createdForm();
  }

  ngOnInit() {
    this.getListPoster();
    this.getListFilm();
  }

  createFormControls() {
      this.imageName = new FormControl('', Validators.required);
  }
  createdForm() {
      this.PosterForm = this.fb.group({
          imageName: this.imageName,
          filmName: this.filmName,
          image: null
      });
  }

  toggleAction() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }

  toggleHistory() {
      this.state_1 = (this.state_1 === 'hidden' ? 'show' : 'hidden');
  }

  onSelectedFile(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length) {
          const [file] = event.target.files;
          reader.readAsDataURL(file);

          reader.onload = () => {
              this.PosterForm.patchValue({
                  image: reader.result
              });
              this.cd.markForCheck();
          };
      }
  }

  getListPoster(): any {
    return this.posterService.getListPoster().subscribe(data => {
      this.posters = data.data.posters;
    });
  }

  getListFilm(): any {
      return this.posterService.getListFilms().subscribe(data => {
          this.films = data.data.films['data'];
      });
  }

  AddPosterSubmit() {
    console.log(this.PosterForm.value);
    this.posterService.createPoster(this.PosterForm.value).subscribe(data => {
        this.getListPoster();
    });
  }

  editImage(image: any, id: number) {
    this.clicked = true;
    this.editIndex = id;
    this.PosterForm.patchValue({
        imageName: image.poster_name,
        filmName: image.film['id'],
    });
    window.scroll(0, 0);
  }

  EditPosterSubmit(): any {
      this.posterService.updatePoster(this.PosterForm.value, this.editIndex).subscribe(data => {
          this.getListPoster();
      });
      this.clicked = true;
  }

}
