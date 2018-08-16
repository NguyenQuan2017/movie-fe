import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GenreService} from '../../../services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
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
export class GenreComponent implements OnInit {

  state = 'small';
  state_1 = 'hidden';
  genreForm: FormGroup;
  genreName: FormControl;
  categories: any;
  genres: any;
  histories: any;
  clicked = false;
  editIndex = null;
  isAvailable = false;
  category = {
      checked: false
  };

  @ViewChild('checkbox') checkbox: ElementRef;
  constructor(private fb: FormBuilder, private genreService: GenreService) {
    this.createFormControl();
    this.createdForm();
    this.getCategories();
  }

  ngOnInit() {
    this.getListGenre();
    this.getListRemoveGenres();
  }

  toggleAction() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }

  toggleHistory() {
      this.state_1 = (this.state_1 === 'hidden' ? 'show' : 'hidden');
  }

  createFormControl() {
    this.genreName = new FormControl('', Validators.required);
  }

  createdForm() {
    this.genreForm = this.fb.group({
        genreName: this.genreName,
        category: this.fb.array([])
    });
  }

  onChange(id: number, isChecked: boolean) {
    const categories = <FormArray> this.genreForm.controls.category;
     if (isChecked) {
       categories.push(new FormControl(id));
     } else {
       const index = categories.controls.findIndex(x => x.value === id);
       categories.removeAt(index);
     }

     console.log(this.genreForm.controls.category.value);

  }
  AddGenreSubmit(): any {
    console.log(this.genreForm.value);
    this.genreService.createGenre(this.genreForm.value).subscribe(data => {
      this.getListGenre();
    });
  }

  editGenre(genre: any, id: number, e): any {
      // this.toggleAction();
      this.clicked = true;
      this.editIndex = id;
      this.category.checked = true;
      this.genreForm.patchValue({
          genreName: genre.genre_name,
      });
      // const categories = <FormArray> this.genreForm.controls.category;

      // this.categories = genre.categories;
      console.log(this.genreForm.controls.category.value);
  }

  EditGenreSubmit(): any {
      this.genreService.updateGenre(this.genreForm.value, this.editIndex).subscribe(data => {
          this.getListGenre();
      });
      this.clicked = true;
  }

  getCategories(): any {
    return this.genreService.getCategories().subscribe(data => {
      this.categories = data.data.categories;
    });
  }

  getListGenre(): any {
    return this.genreService.getListGenres().subscribe(data => {
      this.genres = data.data.genres;
    });
  }

  getListRemoveGenres(): any {
      return this.genreService.getListRemoveGenres().subscribe(data => {
          this.histories = data.data.history_genres;
      });
  }

  removeGenre(id) {
    return this.genreService.removeGenre(id).subscribe(data => {
      this.getListGenre();
    });
  }

  restoreGenre(id): any {
      return this.genreService.restoreGenre(id).subscribe(data => {
          this.getListGenre();
          this.getListRemoveGenres();
      });
  }

  deleteGenre(id): any {
      return this.genreService.deleteGenre(id).subscribe(data => {
          this.getListRemoveGenres();
      });
  }

  reset(e) {
    this.genreForm.reset();
    this.isAvailable = !this.isAvailable;
  }
}
