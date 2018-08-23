import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories: any;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(): any {
    return this.categoryService.getCategories().subscribe(data => {
      this.categories = data.data.categories;
      console.log(this.categories);
    });
  }

}
