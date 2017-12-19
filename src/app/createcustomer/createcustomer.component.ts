import { CustomerInformationService } from '../services/customerinformation.service';
import { customerexemptionservice } from '../services/customerexemptionservice';
import { ICustomer } from '../interfaces/ICustomer';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnChanges, Inject, OnInit } from '@angular/core';
import {FormArray, Validators,FormControl, FormBuilder, FormGroup, ValidatorFn, AbstractControl  } from '@angular/forms';


function zipCountryValidator(c: AbstractControl): { [key: string]: boolean } | null {

  let businessZipCodeControl = c.get('businessZipCode');
  let businessCountryCodeControl = c.get('businessCountryCode');
  let permanentZipCodeControl = c.get('permanentZipCode');
  let permanentCountryCodeControl = c.get('permanentCountryCode');
  let formationZipCodeControl = c.get('formationZipCode');
  let formationCountryCodeControl = c.get('formationCountryCode');

  if (
    (businessZipCodeControl.value != "" || permanentZipCodeControl.value != "" || formationZipCodeControl.value != "") &&
    (businessCountryCodeControl.value != "" || permanentCountryCodeControl.value != "" || formationCountryCodeControl.value != "")
  ) {
    return null;
  }
  return { 'zipCountryValid': true };

}


@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html'
  //styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  customer: ICustomer;
  createCustomerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private customerinformationservice: CustomerInformationService, private customerexemptionservice: customerexemptionservice) {
  }
  createForm() {
    this.createCustomerForm = this.formBuilder.group({
      entityName: [null, [Validators.required, Validators.maxLength(40)]],
      ein: [null, [Validators.required, Validators.maxLength(20)]],
      //ubo: ['', Validators.required],
      NAICSCode: [null, [Validators.required,Validators.maxLength(50)]],
      formationZipCode: [null, [Validators.maxLength(10), validateZIP()]],
      formationCountryCode: [null, Validators.maxLength(5)],
      businessZipCode: [null, [Validators.maxLength(10), validateZIP()]],
      businessCountryCode: [null, Validators.maxLength(5)],
      permanentZipCode: [null, [Validators.maxLength(10), validateZIP()]],
      permanentCountryCode: [null, Validators.maxLength(5)],
      status: null,
      lineOfBusiness: null
    }, { validator: zipCountryValidator });
  }



  ngOnInit() {
      this.customerinformationservice.enableExemptionSelection = false;
      this.customerexemptionservice.enableTreeView = false;
    this.createForm();
    let ein: string =
      this.route.snapshot.params['ein'];
    console.log(ein);
    this.customerinformationservice.getCustomerInfo(ein).subscribe(
      (customerData) => {
        if (customerData == null) {
          console.log('Employee with the specified Employee Code does not exist');
        }
        else {
          this.customer = customerData;
          this.setCreateCustomerFormData();
        }
      },
      (error) => {
        console.log("Problem with the service. Please try again after sometime");
        console.log(error);
      }
    );
  }


  goToCustomersSearch(): void {
    this.router.navigate(['\search'])
  }

  onSubmit() {
    console.log(this.createCustomerForm);
    if (this.createCustomerForm.valid) {
        this.customer = this.prepareSaveCustomer();
        this.customerinformationservice.SaveCustomer(this.customer);
        this.ngOnChanges();
        console.log('form submitted');
        this.customerinformationservice.enableExemptionSelection = true;
    } else {
      this.validateAllFormFields(this.createCustomerForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }



  prepareSaveCustomer(): ICustomer {
    const custModel = this.createCustomerForm.value;

    const saveCust: ICustomer = {
      entityName: custModel.entityName as string,
      ein: custModel.ein as string,
      ubo: custModel.ubo as string,
      NAICSCode: custModel.NAICSCode as string,
      businessCountryCode: custModel.businessCountryCode as string,
      businessZipCode: custModel.businessZipCode as string,
      formationCountryCode: custModel.formationCountryCode as string,
      formationZipCode: custModel.formationZipCode as string,
      lineOfBusiness: custModel.lineOfBusiness as string,
      permanentCountryCode: custModel.permanentCountryCode as string,
      permanentZipCode: custModel.permanentZipCode as string,
      status: custModel.status as string,
      lastUpdatedDate :  new Date(Date.now.toString()) as Date
    }

    return saveCust;
  }

  ngOnChanges() {
    this.setCreateCustomerFormData();
  }


  setCreateCustomerFormData(): void {
    this.createCustomerForm.setValue({
      entityName: this.customer.entityName,
      ein: this.customer.ein,
      //ubo: this.customer.ubo,
      NAICSCode: this.customer.NAICSCode,
      formationZipCode: this.customer.formationZipCode,
      formationCountryCode: this.customer.formationCountryCode,
      businessZipCode: this.customer.businessZipCode,
      businessCountryCode: this.customer.businessCountryCode,
      permanentZipCode: this.customer.permanentZipCode,
      permanentCountryCode: this.customer.permanentCountryCode,
      status: this.customer.status,
      lineOfBusiness: this.customer.lineOfBusiness
    });
  }

  cancel(): void {
    this.ngOnChanges();
  }

}
function validateZIP(): ValidatorFn {
  
    return (c: AbstractControl): { [key: string]: boolean } | null => {
  
      if(c.touched && c.dirty && c.value!=""){
  
      let res = /(^\d{5}$)|(^\d{10}$)|(^\d{5}-\d{4}$)/.test(c.value);
  
      if (res == false) {
        return { 'validateZIP': true }
      }
    }
      return null;
    };
  }
  
