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
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/Observable/throw';
require("rxjs/add/observable/of");
var CustomerInformationService = (function () {
    function CustomerInformationService() {
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
    CustomerInformationService.prototype.getCustomers = function () {
        return this.Customers.sort(function (a, b) {
            //this.isCustomerSaved = false;
            return +new Date(b.lastUpdatedDate) - +new Date(a.lastUpdatedDate);
        });
        ;
    };
    CustomerInformationService.prototype.getCustomer = function (ein) {
        //this.isCustomerSaved = null;
        return this.Customers.find(function (cus) { return cus.ein === ein; });
    };
    CustomerInformationService.prototype.getCustomersInfo = function () { return Observable_1.Observable.of(this.Customers); };
    CustomerInformationService.prototype.getCustomerInfo = function (ein) {
        //this.isCustomerSaved = false;
        console.log("Getting Cusstomer");
        return this.getCustomersInfo()
            .map(function (customer) { return customer.find(function (item) { return item.ein === ein; }); });
    };
    CustomerInformationService.prototype.SaveCustomer = function (customer) {
        //this.isCustomerSaved = true;
        var customerIn = this.Customers.find(function (cus) { return cus.ein === customer.ein; });
        var index = this.Customers.indexOf(customerIn);
        if (index > -1) {
            this.Customers[index] = customer;
        }
        else {
            this.Customers.push(customer);
        }
    };
    CustomerInformationService.prototype.EnableExemptionSelection = function () {
        return this.enableExemptionSelection;
    };
    return CustomerInformationService;
}());
CustomerInformationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CustomerInformationService);
exports.CustomerInformationService = CustomerInformationService;
//# sourceMappingURL=customerinformation.service.js.map