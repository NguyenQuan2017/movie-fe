import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActorService} from '../../../services/actor.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss'],
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
export class ActorComponent implements OnInit {
  state = 'small';
  state_1 = 'hidden';
  histories: any;
  categories: any;
  countries: any;
  genres: any;
  clicked = false;
  actors: any;
  editIndex: number;
  is_edit = false;
  actorForm: FormGroup;
  actorName: FormControl;
  country: FormControl;
  gender: FormControl;
  birth_day: FormControl;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, private actorService: ActorService) {
    this.createFormControls();
    this.createdForm();
  }

  ngOnInit() {
    this.getListActors();
    this.ListCountry();
  }

  toggleAction() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }

  toggleHistory() {
      this.state_1 = (this.state_1 === 'hidden' ? 'show' : 'hidden');
  }

  createFormControls() {
      this.actorName = new FormControl('', Validators.required);
  }

  createdForm() {
      this.actorForm = this.fb.group({
          actorName: this.actorName,
          country: this.country,
          gender: this.gender,
          image: null,
          birth_day: this.birth_day
      });
  }

  onSelectedFile(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length) {
          const [file] = event.target.files;
          reader.readAsDataURL(file);

          reader.onload = () => {
              this.actorForm.patchValue({
                  image: reader.result
              });
              this.cd.markForCheck();
          };
      }
  }

  getListActors(): any {
    return this.actorService.getListActor().subscribe(data => {
      this.actors = data.data.actors;
    });
  }

  ListCountry() {
      this.countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa',
          'Andorra', 'Angola', 'Anguilla', 'Antarctica',
          'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba',
          'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
          'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin',
          'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegowina', 'Botswana',
          'Bouvet Island', 'Brazil', 'British Indian Ocean Territory',
          'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia',
          'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands',
          'Central African Republic', 'Chad', 'Chile', 'China',
          'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia',
          'Comoros', 'Congo', 'Congo, the Democratic Republic of the',
          'Cook Islands', 'Costa Rica',
          'Croatia (Hrvatska)', 'Cuba', 'Cyprus',
          'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
          'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt',
          'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia',
          'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands',
          'Fiji', 'Finland', 'France', 'France Metropolitan', 'French Guiana',
          'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia',
          'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada',
          'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
          'Haiti', 'Heard and Mc Donald Islands', 'Holy See (Vatican City State)',
          'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia',
          'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy',
          'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
          'Korea', 'Kuwait', 'Kyrgyzstan', 'Lao', 'Latvia',
          'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya',
          'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau',
          'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta',
          'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius',
          'Mayotte', 'Mexico', 'Micronesia, Federated States of',
          'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique',
          'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
          'Netherlands Antilles', 'New Caledonia', 'New Zealand',
          'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island',
          'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan',
          'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru',
          'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico',
          'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda',
          'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
          'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal',
          'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia (Slovak Republic)',
          'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands',
          'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan',
          'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden',
          'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province of China',
          'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo',
          'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
          'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda',
          'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
          'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan',
          'Vanuatu', 'Venezuela', 'Vietnam', 'Virgin Islands (British)',
          'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara',
          'Yemen', 'Yugoslavia', 'Zambia', 'Zimbabwe'];
  }

  AddActorSubmit(): any {
    console.log(this.actorForm.value);
    return this.actorService.createActor(this.actorForm.value).subscribe(data => {
        this.getListActors();
    });
  }

  show() {
      this.state = 'large';
  }
  editActor(actor, id) {
      this.clicked = true;
      this.editIndex = id;
      this.actorForm.patchValue({
          actorName: actor.actor_name,
          gender: actor.gender,
          birth_day: actor.birth_day,
          country: actor.country
      });
      window.scroll(0, 0);
      this.show();
  }

  EditActorSubmit(): any {
      console.log(this.actorForm.value);
      this.clicked = true;
      return this.actorService.updateActor(this.actorForm.value, this.editIndex).subscribe(data => {
          this.getListActors();
      });
  }
}
