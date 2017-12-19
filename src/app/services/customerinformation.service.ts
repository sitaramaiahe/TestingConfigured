import { Injectable } from '@angular/core';
import { ICustomer } from '../interfaces/ICustomer';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/Observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class CustomerInformationService {
    enableExemptionSelection: boolean;
    Customers: ICustomer[];


  constructor() {
    this.Customers = [
      {
        "ein": "113-45-8291",
        "entityName": "Leaf Rake",
        "ubo": "123-45-678",
        "NAICSCode": "GDN-0011",
        "formationZipCode": "March 19, 2016",
        "formationCountryCode": "Leaf rake with 48-inch wooden handle.",
        "businessZipCode": "57108",
        "businessCountryCode": "12345",
        "permanentZipCode": "53145",
        "permanentCountryCode": "67890",
        "status": "Complete",
        "lineOfBusiness": "Equipment Finance",
        "lastUpdatedDate": new Date("February 3, 2016 10:13:00")
      },
      {
        "ein": "113-45-8291",
        "entityName": "afdsafds fadsfads",
        "ubo": "109-45-613",
        "NAICSCode": "GDN-0011",
        "formationZipCode": "57107",
        "formationCountryCode": "Leaf rake with 48-inch wooden handle.",
        "businessZipCode": "57107",
        "businessCountryCode": "12345",
        "permanentZipCode": "53145",
        "permanentCountryCode": "67890",
        "status": "Complete",
        "lineOfBusiness": "Inventory Finace (Non Deposit)",
        "lastUpdatedDate": new Date("February 6, 2016 10:13:00")
      },
      {
        "ein": "137-45-8291",
        "entityName": "afdsafds fadsfads",
        "ubo": "123-45-789",
        "NAICSCode": "GDN-0011",
        "formationZipCode": "58123",
        "formationCountryCode": "Leaf rake with 48-inch wooden handle.",
        "businessZipCode": "57107",
        "businessCountryCode": "12345",
        "permanentZipCode": "53145",
        "permanentCountryCode": "67890",
        "status": "Complete",
        "lineOfBusiness": "Inventory Finace (Non Deposit)",
        "lastUpdatedDate": new Date("February 5, 2016 10:13:00")
      },
      {
        "ein": "137-45-8291",
        "entityName": "afdsafds fadsfads",
        "ubo": "123-45-821",
        "NAICSCode": "GDN-0011",
        "formationZipCode": "59125",
        "formationCountryCode": "Leaf rake with 48-inch wooden handle.",
        "businessZipCode": "57107",
        "businessCountryCode": "12345",
        "permanentZipCode": "53145",
        "permanentCountryCode": "67890",
        "status": "InProcess",
        "lineOfBusiness": "Inventory Finace (Non Deposit)",
        "lastUpdatedDate": new Date("February 4, 2016 10:13:00")
      },
      {
        "ein": "137-45-8390",
        "entityName": "afdsafds fadsfads",
        "ubo": "123-45-312",
        "NAICSCode": "GDN-0011",
        "formationZipCode": "March 19, 2016",
        "formationCountryCode": "Leaf rake with 48-inch wooden handle.",
        "businessZipCode": "57107",
        "businessCountryCode": "12345",
        "permanentZipCode": "53145",
        "permanentCountryCode": "67890",
        "status": "InProcess",
        "lineOfBusiness": "Inventory Finace (Non Deposit)",
        "lastUpdatedDate": new Date("February 5, 2016 10:13:00")
      }
    ];
  }

  //getCustomers(): ICustomer[] {

  //    return this.Customers;
  //}
  getCustomers() {
      return this.Customers.sort((a: ICustomer, b: ICustomer) => {
          //this.isCustomerSaved = false;
    return +new Date(b.lastUpdatedDate) - +new Date(a.lastUpdatedDate);
});; }

  getCustomer(ein: string) {
      //this.isCustomerSaved = null;
    return this.Customers.find(cus => cus.ein === ein);
  }
  
  getCustomersInfo() { return Observable.of(this.Customers); }

  getCustomerInfo(ein: string) {
      //this.isCustomerSaved = false;
    console.log("Getting Cusstomer");
    return this.getCustomersInfo()
      // (+) before `id` turns the string into a number
      .map(customer => customer.find(item => item.ein === ein));
  }

  SaveCustomer(customer: ICustomer) {
      //this.isCustomerSaved = true;
    let customerIn = this.Customers.find(cus => cus.ein === customer.ein);
    let index = this.Customers.indexOf(customerIn);
    if (index > -1) {
      this.Customers[index] = customer;
    } else {
      this.Customers.push(customer);
    }
  }

  EnableExemptionSelection(): boolean {
      return this.enableExemptionSelection;
  }

}
