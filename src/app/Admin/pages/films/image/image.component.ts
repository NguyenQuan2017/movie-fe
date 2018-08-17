import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ImageService} from '../../../services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
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
export class ImageComponent implements OnInit {

  state = 'small';
  state_1 = 'hidden';
  histories: any;
  clicked = false;
  images: any;
  editIndex: number;
  ImageForm: FormGroup;
  imageName: FormControl;

  constructor(private fb: FormBuilder, private imageService: ImageService, private cd: ChangeDetectorRef) {
    this.createFormControls();
    this.createdForm();
  }

  ngOnInit() {
    this.getListImage();
    this.getListImageRemoved();
  }

  createFormControls() {
    this.imageName = new FormControl('', Validators.required);
  }
  createdForm() {
    this.ImageForm = this.fb.group({
        imageName: this.imageName,
        image: null
    });
  }
  toggleAction() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }

  toggleHistory() {
      this.state_1 = (this.state_1 === 'hidden' ? 'show' : 'hidden');
  }

  getListImage(): any {
    return this.imageService.getListImage().subscribe(data => {
      this.images = data.data.images;
      console.log(this.images);
    });
  }

  getListImageRemoved(): any {
    return this.imageService.getListImageRemoved().subscribe(data  => {
      this.histories = data.data.history_images;
    });
  }

  onSelectedFile(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);

        reader.onload = () => {
            this.ImageForm.patchValue({
                image: reader.result
            });
            this.cd.markForCheck();
        };
    }
  }
  editImage(image: any, id: number) {
      this.clicked = true;
      this.editIndex = id;
      this.ImageForm.patchValue({
          imageName: image.image_name,
          image: image.link
      });
      window.scroll(0, 0);
  }

  EditImageSubmit(): any {
      console.log(this.ImageForm.value);
      this.imageService.editImage(this.ImageForm.value, this.editIndex).subscribe(data => {
          this.getListImage();
      });
      this.clicked = true;
  }
}
