import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { customerexemptionservice } from '../services/customerexemptionservice';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ExemptionCategory } from '../classes/ExemptionCategory';
import { ExemptionSubCategory } from '../classes/ExemptionSubCategory';

@Component({
  selector: 'app-customerexemptionselection',
  templateUrl: './customerexemptionselection.component.html'
  //styleUrls: ['./customerexemptionselection.component.css']
})
export class CustomerexemptionselectionComponent implements OnInit {
  categories: ExemptionCategory[];
  subCategories: ExemptionSubCategory[];

  customerExemptionForm: FormGroup;

  constructor(private _customerexemptionservice: customerexemptionservice, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.customerExemptionForm = this.formBuilder.group({
      custCategory: [''],
      custSubCategory: ['']
    });
    this.categories = this._customerexemptionservice.getCategories();
    this.subCategories = this._customerexemptionservice.getSubCategories();
  }

  onCategoryChange(): void {
      this._customerexemptionservice.enableTreeView = true;
    this.subCategories = this._customerexemptionservice.getSubCategories().filter(
      c => c.CategoryId === this.customerExemptionForm.get('custCategory').value.CategoryId);
    console.log(this.customerExemptionForm.get('custCategory').value);
  }

  // exemptionSelectionForm: FormGroup;

  // constructor(private formBuilder: FormBuilder,
  //     private router: Router,
  //     private route: ActivatedRoute,
  //     private customerexemptionservice: customerexemptionservice) { }

  // ngOnInit() {
  //     this.exemptionSelectionForm = this.formBuilder.group({
  //         ExemptionCategory: [''],
  //         ExemptionSubCategory: ['']
  //     });
  //}

}
