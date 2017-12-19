"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExemptionCategory_1 = require("../classes/ExemptionCategory");
var ExemptionSubCategory_1 = require("../classes/ExemptionSubCategory");
require("rxjs/add/operator/map");
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/Observable/throw';
//import 'rxjs/add/observable/of';
var customerexemptionservice = (function () {
    function customerexemptionservice() {
    }
    customerexemptionservice.prototype.getCategories = function () {
        return [
            new ExemptionCategory_1.ExemptionCategory(1, "Regulated Entity"),
            new ExemptionCategory_1.ExemptionCategory(2, "Publicly Traded"),
            new ExemptionCategory_1.ExemptionCategory(3, "Foreign Entities"),
            new ExemptionCategory_1.ExemptionCategory(4, " Additional exemptions")
        ];
    };
    customerexemptionservice.prototype.getSubCategories = function () {
        return [
            new ExemptionSubCategory_1.ExemptionSubCategory(1, "Financial Institution"),
            new ExemptionSubCategory_1.ExemptionSubCategory(1, "Dept or Agency of the US, State or State subdivision"),
            new ExemptionSubCategory_1.ExemptionSubCategory(1, "US, State, or State Subdivision governmental authority entities"),
            new ExemptionSubCategory_1.ExemptionSubCategory(1, "Issuer of a class of securities under Exchange Act*"),
            new ExemptionSubCategory_1.ExemptionSubCategory(2, "Publicly Traded Entity*"),
            new ExemptionSubCategory_1.ExemptionSubCategory(2, "Entity with 51% of a Publicly Traded Entity*"),
            new ExemptionSubCategory_1.ExemptionSubCategory(3, "Non-U.S. Governmental Dept., Agency, or Political Subdivision*"),
            new ExemptionSubCategory_1.ExemptionSubCategory(3, "Foreign Financial Institution with UBO Regulation*"),
            new ExemptionSubCategory_1.ExemptionSubCategory(4, "Non-U.S.Governmental Dept., Agency, or Political Subdivision*"),
            new ExemptionSubCategory_1.ExemptionSubCategory(4, "Non-Excluded Pooled Investment Vehicles"),
            new ExemptionSubCategory_1.ExemptionSubCategory(4, "Intermediated Account Relationships"),
            new ExemptionSubCategory_1.ExemptionSubCategory(4, "Private Label Retail Credit Accounts*"),
        ];
    };
    customerexemptionservice.prototype.EnableTreeView = function () {
        return this.enableTreeView;
    };
    return customerexemptionservice;
}());
customerexemptionservice = __decorate([
    core_1.Injectable()
], customerexemptionservice);
exports.customerexemptionservice = customerexemptionservice;
//# sourceMappingURL=customerexemptionservice.js.map