import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CategoryService} from '../../../services/category.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
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
export class CategoryComponent implements OnInit {

  state = 'small';
  state_1 = 'hidden';
  categories: any;
  histories: any;
  clicked = false;
  editIndex = null;
  CategoryForm: FormGroup;
  cateName: FormControl;
  constructor(private  categoryService: CategoryService, private fb: FormBuilder) {
      this.getAllCategory();
      this.getAllCategoryDelete();
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

  createFormControls() {
        this.cateName = new FormControl('', Validators.required);
  }

  createdForm () {
    this.CategoryForm = this.fb.group({
        cateName: this.cateName,
    });
  }

  getAllCategory(): any {
      return this.categoryService.getAllCategories().subscribe(data => {
          console.log(data.data.categories);
          this.categories = data.data.categories;
      });
  }

  getAllCategoryDelete(): any {
      return this.categoryService.getAllCategoryDelete().subscribe(data => {
          console.log(data.data.history_category);
          this.histories = data.data.history_category;
      });
  }

  AddCategorySubmit() {
      const valueData = this.CategoryForm.value;
      return this.categoryService.createCategory(valueData).subscribe(data => {
          console.log(data);
          this.getAllCategory();
      });
  }

  editCategory(category, id) {
      this.toggleAction();
      this.clicked = !this.clicked;
      this.editIndex = id;
      this.CategoryForm.setValue({
          'cateName': category.cate_name
      });
  }

  EditCategorySubmit(): any {
      this.categoryService.updateCategory(this.CategoryForm.value, this.editIndex).subscribe(data =>{
          console.log(data);
          this.getAllCategory();
      });
      this.clicked = !this.clicked;
  }

  removeCategory(id): any {
      return this.categoryService.removeCategory(id).subscribe(data => {
          console.log(data);
          this.getAllCategory();
          this.getAllCategoryDelete();
      });
  }

  restoreCategory(id): any {
      return this.categoryService.restoreCategory(id).subscribe(data => {
          this.getAllCategory();
          this.getAllCategoryDelete();
      });
  }

  deleteCategory(id): any {
      return this.categoryService.deleteCategory(id).subscribe(data => {
          this.getAllCategoryDelete();
      });
  }

  reset() {
      this.CategoryForm.reset();
  }
}
