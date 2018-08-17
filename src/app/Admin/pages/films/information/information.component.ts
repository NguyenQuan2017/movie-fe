import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Form, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable, range} from 'rxjs';
import {InformationService} from '../../../services/information.service';

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
  constructor(private fb: FormBuilder, private informationService: InformationService) {
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
    this.highDefinitions = ['HD', 'Full HD', 'CAM'];
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
    this.InformationForm.patchValue({
        content: information.content,
        year: information.year,
        highDefinition: information.high_definition,
        episodeNumber: information.episode_number,
        filmName: information.film['id']
    });
    console.log(this.InformationForm.value);
    window.scroll(0, 0);
  }

  EditInformationSubmit(): any {
    this.informationService.editInformationFilm(this.InformationForm.value, this.editIndex).subscribe(data => {
      this.getListInformationFilm();
    });
    this.clicked = true;
  }
}
