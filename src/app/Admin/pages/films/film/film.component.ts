import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
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
export class FilmComponent implements OnInit {

  state = 'small';
  state_1 = 'hidden';
  histories: any;
  clicked = false;
  films: any;
  editIndex: number;
  is_edit = false;
  FilmForm: FormGroup;
  filmName: FormControl;
  filmNameEl: FormControl;
  description: FormControl;

  constructor(private fb: FormBuilder, private filmService: FilmService, private  cd: ChangeDetectorRef) {
    this.createFormControls();
    this.createdForm();
  }

  ngOnInit() {
      this.getAllListFilm();
      this.getAllListFilmRemoved();
  }

  toggleAction() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }

  toggleHistory() {
      this.state_1 = (this.state_1 === 'hidden' ? 'show' : 'hidden');
  }

  createFormControls() {
    this.filmName = new FormControl('', Validators.required);
    this.filmNameEl = new FormControl('', Validators.required);
  }

  createdForm() {
    this.FilmForm = this.fb.group({
        filmName: this.filmName,
        filmNameEl: this.filmNameEl,
        description: this.description,
        image: null
    });
  }

  onSelectedFile(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);

        reader.onload = () => {
            this.FilmForm.patchValue({
                image: reader.result
            });
            this.cd.markForCheck();
        };
    }
  }

  getAllListFilm(): any {
      return this.filmService.getAllListFilms().subscribe(data => {
          this.films = data.data.films['data'];
      });
  }

  getAllListFilmRemoved(): any {
      return this.filmService.getAllListFilmsRemoved().subscribe(data => {
          console.log(data);
          this.histories = data.data.history_films;
          console.log(this.histories);
      });
  }

  AddFilmSubmit() {
      return this.filmService.createFilm(this.FilmForm.value).subscribe(data => {
          this.getAllListFilm();
      });
  }

  editFilm(film: any, id: number) {
      this.clicked = true;
      this.is_edit = true;
      this.editIndex = id;
      this.FilmForm.patchValue({
          filmName: film.film_name,
          filmNameEl: film.film_name_el,
          description: film.description
      });
  }

  EditFilmSubmit(): any {
      this.filmService.editFilm(this.FilmForm.value, this.editIndex).subscribe(data => {
          this.getAllListFilm();
      });
      this.clicked = true;
  }

  removeFilm(id): any {
      return this.filmService.removeFilm(id).subscribe(data => {
          this.getAllListFilm();
          this.getAllListFilmRemoved();
      });
  }

  restoreFilm(id): any {
      return this.filmService.restoreFilm(id).subscribe(data => {
          this.getAllListFilm();
          this.getAllListFilmRemoved();
      });
  }

  deleteFilm(id): any {
      return this.filmService.deleteFilm(id).subscribe(data => {
          this.getAllListFilmRemoved();
      });
  }

  reset() {
      this.FilmForm.reset();
      this.is_edit = false;
  }
}
