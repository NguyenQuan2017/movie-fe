import {ChangeDetectorRef, Component, OnInit, Pipe} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Form, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable, range} from 'rxjs';
import {InformationService} from '../../../services/information.service';
import {$} from 'protractor';
import {EditorModule} from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
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

export class InformationComponent implements OnInit {

  state = 'small';
  state_1 = 'hidden';
  informations: any;
  films: any;
  histories: any;
  limit = 200;
  i;
  editIndex: null;
  years = [];
  highDefinitions = [];
  clicked = false;
  InformationForm: FormGroup;
  content: FormControl;
  year: FormControl;
  episodeNumber: FormControl;
  filmName: FormControl;
  highDefinition: FormControl;

  constructor(private fb: FormBuilder, private informationService: InformationService, private cd: ChangeDetectorRef) {
    this.createdForm();
    this.createdYear();
    this.createHighDefinition();
  }

  ngOnInit() {
    this.getListInformationFilm();
    this.getListFilm();
    this.getListInformationRemoved();
  }

  toggleAction() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }

  toggleHistory() {
      this.state_1 = (this.state_1 === 'hidden' ? 'show' : 'hidden');
  }

  Show() {
      this.state = 'large';
  }

  createdForm() {
    this.InformationForm = this.fb.group({
      content: this.content,
      year: this.year,
      highDefinition: this.highDefinition,
      episodeNumber: this.episodeNumber,
      filmName: this.filmName
    });
  }

  createdYear() {
    for (this.i = 2000; this.i <= 2018; this.i++) {
      this.years.push(this.i);
    }
  }

  createHighDefinition() {
    this.highDefinitions = ['HD', 'Full HD', 'CAM', 'HD 720'];
  }

  getListInformationFilm(): any {
    return this.informationService.getListInformationFilm().subscribe(data => {
      this.informations = data.data.informations;
    });
  }

  getListFilm(): any {
    return this.informationService.getListFilm().subscribe(data => {
      this.films = data.data.films['data'];
    });
  }

  getListInformationRemoved(): any {
    return this.informationService.getListInformationRemoved().subscribe(data => {
      this.histories = data.data.history_informations;
    });
  }

  createInformationFilm(): any {
    return this.informationService.createInformationFilm(this.InformationForm.value).subscribe(data => {
      this.getListInformationFilm();
    });
  }

  editInformation(information, id): any {
    this.clicked = true;
    this.editIndex = id;
    this.Show();
    this.InformationForm.patchValue({
        content: information.content,
        year: information.year,
        highDefinition: information.high_definition,
        episodeNumber: information.episode_number,
        filmName: information.film['id']
    });
    window.scroll(0, 0);
  }

  EditInformationSubmit(): any {
    console.log(this.InformationForm.value);
    this.informationService.editInformationFilm(this.InformationForm.value, this.editIndex).subscribe(data => {
      this.getListInformationFilm();
    });
    this.clicked = true;
    this.InformationForm.reset();
    this.InformationForm.patchValue( {
      content: '',
    });
  }

  uploadImage() {

  }

  removeInformation(id): any {
      return this.informationService.removeInformation(id).subscribe(data => {
          this.getListInformationFilm();
          this.getListInformationRemoved();
      });
  }

  restoreInformation(id): any {
      return this.informationService.restoreInformation(id).subscribe(data => {
          this.getListInformationRemoved();
          this.getListInformationFilm();
      });
  }

  deleteInformation(id): any {
      return this.informationService.deleteInformation(id).subscribe(data => {
          this.getListInformationRemoved();
      });
  }
  reset() {
      this.clicked = false;
      this.InformationForm.reset();
      this.InformationForm.patchValue( {
          content: '',
      });
  }

}
