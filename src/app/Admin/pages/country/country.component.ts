import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CountryService} from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
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
export class CountryComponent implements OnInit {
  state = 'small';
  state_1 = 'hidden';
  countries: any;
  histories: any;
  clicked = false;
  editIndex = null;
  CountryForm: FormGroup;
  country: FormControl;
  constructor(private fb: FormBuilder, private countryService: CountryService) {
      this.createFormControls();
      this.createdForm();
  }

  ngOnInit() {
      this.getListCountries();
  }

  toggleAction() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }

  toggleHistory() {
      this.state_1 = (this.state_1 === 'hidden' ? 'show' : 'hidden');
  }

  createFormControls() {
      this.country = new FormControl('', Validators.required);
  }
  createdForm() {
      this.CountryForm = this.fb.group({
          country: this.country
      });
  }

  AddCountrySubmit() {
      console.log(this.CountryForm.value);
      this.countryService.createCountry(this.CountryForm.value).subscribe(data => {
          this.getListCountries();
      });
      this.reset();
  }

  getListCountries() {
      return this.countryService.getListCountries().subscribe(data => {
          this.countries = data['data'].countries;
      });
  }

  editCountry(country, id) {
      this.clicked = true;
      this.show();
      this.editIndex = id;
      this.CountryForm.patchValue({
          country: country.country
      });
  }

  reset() {
      this.CountryForm.reset();
  }

  show() {
      this.state = 'large';
  }

  EditCountrySubmit() {
      this.clicked = true;
      this.countryService.updateCountry(this.CountryForm.value, this.editIndex).subscribe(data => {
          this.getListCountries();
      });
      this.reset();
  }

}
