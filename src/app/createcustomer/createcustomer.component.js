"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var customerinformation_service_1 = require("../services/customerinformation.service");
var customerexemptionservice_1 = require("../services/customerexemptionservice");
require("rxjs/add/operator/switchMap");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
function zipCountryValidator(c) {
    var businessZipCodeControl = c.get('businessZipCode');
    var businessCountryCodeControl = c.get('businessCountryCode');
    var permanentZipCodeControl = c.get('permanentZipCode');
    var permanentCountryCodeControl = c.get('permanentCountryCode');
    var formationZipCodeControl = c.get('formationZipCode');
    var formationCountryCodeControl = c.get('formationCountryCode');
    if ((businessZipCodeControl.value != "" || permanentZipCodeControl.value != "" || formationZipCodeControl.value != "") &&
        (businessCountryCodeControl.value != "" || permanentCountryCodeControl.value != "" || formationCountryCodeControl.value != "")) {
        return null;
    }
    return { 'zipCountryValid': true };
}
var CreatecustomerComponent = (function () {
    function CreatecustomerComponent(formBuilder, router, route, customerinformationservice, customerexemptionservice) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.customerinformationservice = customerinformationservice;
        this.customerexemptionservice = customerexemptionservice;
    }
    CreatecustomerComponent.prototype.createForm = function () {
        this.createCustomerForm = this.formBuilder.group({
            entityName: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(40)]],
            ein: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(20)]],
            //ubo: ['', Validators.required],
            NAICSCode: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(50)]],
            formationZipCode: [null, [forms_1.Validators.maxLength(10), validateZIP()]],
            formationCountryCode: [null, forms_1.Validators.maxLength(5)],
            businessZipCode: [null, [forms_1.Validators.maxLength(10), validateZIP()]],
            businessCountryCode: [null, forms_1.Validators.maxLength(5)],
            permanentZipCode: [null, [forms_1.Validators.maxLength(10), validateZIP()]],
            permanentCountryCode: [null, forms_1.Validators.maxLength(5)],
            status: null,
            lineOfBusiness: null
        }, { validator: zipCountryValidator });
    };
    CreatecustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerinformationservice.enableExemptionSelection = false;
        this.customerexemptionservice.enableTreeView = false;
        this.createForm();
        var ein = this.route.snapshot.params['ein'];
        console.log(ein);
        this.customerinformationservice.getCustomerInfo(ein).subscribe(function (customerData) {
            if (customerData == null) {
                console.log('Employee with the specified Employee Code does not exist');
            }
            else {
                _this.customer = customerData;
                _this.setCreateCustomerFormData();
            }
        }, function (error) {
            console.log("Problem with the service. Please try again after sometime");
            console.log(error);
        });
    };
    CreatecustomerComponent.prototype.goToCustomersSearch = function () {
        this.router.navigate(['\search']);
    };
    CreatecustomerComponent.prototype.onSubmit = function () {
        console.log(this.createCustomerForm);
        if (this.createCustomerForm.valid) {
            this.customer = this.prepareSaveCustomer();
            this.customerinformationservice.SaveCustomer(this.customer);
            this.ngOnChanges();
            console.log('form submitted');
            this.customerinformationservice.enableExemptionSelection = true;
        }
        else {
            this.validateAllFormFields(this.createCustomerForm);
        }
    };
    CreatecustomerComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            console.log(field);
            var control = formGroup.get(field);
            if (control instanceof forms_1.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof forms_1.FormGroup) {
                _this.validateAllFormFields(control);
            }
        });
    };
    CreatecustomerComponent.prototype.prepareSaveCustomer = function () {
        var custModel = this.createCustomerForm.value;
        var saveCust = {
            entityName: custModel.entityName,
            ein: custModel.ein,
            ubo: custModel.ubo,
            NAICSCode: custModel.NAICSCode,
            businessCountryCode: custModel.businessCountryCode,
            businessZipCode: custModel.businessZipCode,
            formationCountryCode: custModel.formationCountryCode,
            formationZipCode: custModel.formationZipCode,
            lineOfBusiness: custModel.lineOfBusiness,
            permanentCountryCode: custModel.permanentCountryCode,
            permanentZipCode: custModel.permanentZipCode,
            status: custModel.status,
            lastUpdatedDate: new Date(Date.now.toString())
        };
        return saveCust;
    };
    CreatecustomerComponent.prototype.ngOnChanges = function () {
        this.setCreateCustomerFormData();
    };
    CreatecustomerComponent.prototype.setCreateCustomerFormData = function () {
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
    };
    CreatecustomerComponent.prototype.cancel = function () {
        this.ngOnChanges();
    };
    return CreatecustomerComponent;
}());
CreatecustomerComponent = __decorate([
    core_1.Component({
        selector: 'app-createcustomer',
        templateUrl: './createcustomer.component.html'
        //styleUrls: ['./createcustomer.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        customerinformation_service_1.CustomerInformationService, customerexemptionservice_1.customerexemptionservice])
], CreatecustomerComponent);
exports.CreatecustomerComponent = CreatecustomerComponent;
function validateZIP() {
    return function (c) {
        if (c.touched && c.dirty && c.value != "") {
            var res = /(^\d{5}$)|(^\d{10}$)|(^\d{5}-\d{4}$)/.test(c.value);
            if (res == false) {
                return { 'validateZIP': true };
            }
        }
        return null;
    };
}
//# sourceMappingURL=createcustomer.component.js.map