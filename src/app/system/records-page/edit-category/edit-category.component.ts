import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../shared/models/category.model';
import { CategoriesService } from '../../shared/services/categories.service';
import { Message } from '../../../shared/models/message.model';
import {Subscription} from "rxjs";

@Component({
  selector: 'gosh-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  sub1: Subscription;

  @Input() categories: Category[] = [];
  @Output() onCategoryEdit = new EventEmitter<Category>();

  currentCategoryId = 4;
  currentCategory: Category;
  message: Message;
  num: number;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.message = new Message('success', '');
    this.currentCategory = this.categories[0];
  }

  onCategoryChange() {
    let val = this.categories[0];

    this.currentCategory = this.categories
      .find(c => c.id === +this.currentCategoryId);   // === val.id);   //
  }

  onSubmit(form: NgForm) {
    let {capacity, name} = form.value;
    if (capacity < 0) capacity *= -1;

    const category = new Category(name, capacity, +this.currentCategoryId);

    this.sub1 =
        this.categoriesService.updateCategory(category)
        .subscribe((category: Category) => {
        this.onCategoryEdit.emit(category);
        this.message.text = 'Category successfully updated';
        window.setTimeout(() => this.message.text = '', 5000);
        })
  }
  ngOnDestroy() {
   if(this.sub1) this.sub1.unsubscribe();
  }

}
