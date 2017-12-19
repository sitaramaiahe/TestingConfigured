import { Injectable } from '@angular/core';
import { IExemption } from '../interfaces/IExemption';
import { ExemptionCategory } from '../classes/ExemptionCategory';
import { ExemptionSubCategory } from '../classes/ExemptionSubCategory'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/Observable/throw';
//import 'rxjs/add/observable/of';

@Injectable()
export class customerexemptionservice {

    enableTreeView: boolean;

    getCategories(): ExemptionCategory[] {
    return [
      new ExemptionCategory(1, "Regulated Entity"),
      new ExemptionCategory(2, "Publicly Traded"),
      new ExemptionCategory(3, "Foreign Entities"),
      new ExemptionCategory(4, " Additional exemptions")
     
    ];
  }

  getSubCategories(): ExemptionSubCategory[] {
    return [
      new ExemptionSubCategory(1,"Financial Institution"),
      new ExemptionSubCategory(1, "Dept or Agency of the US, State or State subdivision"),
      new ExemptionSubCategory(1, "US, State, or State Subdivision governmental authority entities"),
      new ExemptionSubCategory(1, "Issuer of a class of securities under Exchange Act*"),
      new ExemptionSubCategory(2, "Publicly Traded Entity*"),
      new ExemptionSubCategory(2, "Entity with 51% of a Publicly Traded Entity*"),
      new ExemptionSubCategory(3, "Non-U.S. Governmental Dept., Agency, or Political Subdivision*"),
      new ExemptionSubCategory(3, "Foreign Financial Institution with UBO Regulation*"),    
      new ExemptionSubCategory(4, "Non-U.S.Governmental Dept., Agency, or Political Subdivision*"),
      new ExemptionSubCategory(4, "Non-Excluded Pooled Investment Vehicles"),
      new ExemptionSubCategory(4, "Intermediated Account Relationships"),
      new ExemptionSubCategory(4, "Private Label Retail Credit Accounts*"),
      ];
    
  }

  EnableTreeView(): boolean {
      return this.enableTreeView;
  }
}
