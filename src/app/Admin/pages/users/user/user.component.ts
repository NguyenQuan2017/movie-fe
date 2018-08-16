import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import {FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
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
export class UserComponent implements OnInit {
  users: any;
  user: any = {
      password: null
  };
  roles: any;
  data: any;
  state = 'small';
  state_1 = 'hidden';
  histories: any;
  loading = false;
  is_edit = false;
  clicked = false;
  role = {
      is_role: true
  };
  editIndex = null;
  fileToUpload: File;
  @ViewChild('input') input: ElementRef;
  constructor (private userService: UserService, private fb: FormBuilder, private  cd: ChangeDetectorRef) {
      this.getRole();
      this.getUsers();
      this.getUserDeleted();
  }
  userForm: FormGroup;
  firstName: any = FormControl;
  lastName: any = FormControl;
  userName: any = FormControl;
  email: any = FormControl;
  password: any = FormControl;

  createFormControls() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required),
        this.userName = new FormControl('', [
          Validators.required,
          Validators.minLength(6)
      ]);
      this.email = new FormControl('', [
          Validators.required,
          Validators.pattern('[^ @]*@[^ @]*')
      ]);
      this.password = new FormControl('', [
          Validators.required,
          Validators.minLength(8)
      ]);
  }

  createdForm () {
    this.userForm = this.fb.group({
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        email: this.email,
        password: this.password,
        avatar: null,
        roleName: [],
    });

  }

  onSelectedFile(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length) {
          const [file] = event.target.files;
          reader.readAsDataURL(file);

          reader.onload = () => {
              this.userForm.patchValue({
                  avatar: reader.result
              });

              // need to run CD since file load runs outside of zone
              this.cd.markForCheck();
          };
      }
  }

    private prepareSave(): any {
        const input = new FormData();
        input.append('firstName', this.userForm.get('firstName').value);
        input.append('lastName', this.userForm.get('lastName').value);
        input.append('userName', this.userForm.get('userName').value);
        input.append('email', this.userForm.get('email').value);
        input.append('password', this.userForm.get('password').value);
        input.append('roleName', this.userForm.get('roleName').value);
        input.append('avatar', this.userForm.get('avatar').value);
        return input;
    }

  ngOnInit() {
      this.createFormControls();
      this.createdForm();
  }


  toggleAction() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }

  toggleHistory() {
      this.state_1 = (this.state_1 === 'hidden' ? 'show' : 'hidden');
  }

  getUsers(): any {
      return this.userService.getAllUser().subscribe(data => {
          console.log(data);
          this.users = data['data'].users.data;
      });
  }

  getRole(): any {
      return this.userService.getRole().subscribe(data => {
          this.roles = data['data'].roles;
      });
  }

  reset() {
    this.userForm.reset();
    this.is_edit = false;
  }

  AddUserSubmit(): any {
      if (this.userForm.valid) {
          const modelForm = this.prepareSave();
        this.loading = true;
        return this.userService.createUser(modelForm).subscribe(res => {
                console.log(res);
                this.getUsers();
        });
      }
     this.reset();
      setTimeout(() => {
          // FormData cannot be inspected (see "Key difference"), hence no need to log it here
          this.loading = false;
      }, 1000);
  }

  editUser(user, i): any {
    this.toggleAction();
    this.clicked = !this.clicked;
    this.editIndex = i;
    this.is_edit = true;
    this.roles = user.roles;
    this.userForm.setValue( {
      firstName: user.first_name,
      lastName: user.last_name,
      userName: user.user_name,
      email: user.email,
      password: '',
      avatar: this.roles,
      roleName: ''
    });
  }

  EditUserSubmit(): any {
    console.log(this.userForm);
    this.loading = true;
    this.userService.updateUser(this.userForm.value, this.editIndex).subscribe( res => {
        console.log(res);
        this.getUsers();
    });
    this.clicked = !this.clicked;

  }

  getUserDeleted(): any {
      return this.userService.getAllUserDeleted().subscribe(data => {
          this.histories = data['data'].history_user;
          console.log(this.histories);
      });
  }

  deleteUser(id): any {
      return this.userService.deleteUser(id).subscribe( data => {
          this.getUsers();
          this.getUserDeleted();
      });
  }

  restoreUser(id): any {
      return this.userService.restoreUser(id).subscribe(data => {
          this.getUsers();
          this.getUserDeleted();
      });
  }

  deleteUserHistory(id): any {
      return this.userService.deleteUserHistory(id).subscribe(data => {
          this.getUserDeleted();
      });
  }
}
