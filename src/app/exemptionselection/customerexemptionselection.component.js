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
var forms_1 = require("@angular/forms");
var customerexemptionservice_1 = require("../services/customerexemptionservice");
require("rxjs/add/operator/switchMap");
var CustomerexemptionselectionComponent = (function () {
    function CustomerexemptionselectionComponent(_customerexemptionservice, formBuilder) {
        this._customerexemptionservice = _customerexemptionservice;
        this.formBuilder = formBuilder;
    }
    CustomerexemptionselectionComponent.prototype.ngOnInit = function () {
        this.customerExemptionForm = this.formBuilder.group({
            custCategory: [''],
            custSubCategory: ['']
        });
        this.categories = this._customerexemptionservice.getCategories();
        this.subCategories = this._customerexemptionservice.getSubCategories();
    };
    CustomerexemptionselectionComponent.prototype.onCategoryChange = function () {
        var _this = this;
        this._customerexemptionservice.enableTreeView = true;
        this.subCategories = this._customerexemptionservice.getSubCategories().filter(function (c) { return c.CategoryId === _this.customerExemptionForm.get('custCategory').value.CategoryId; });
        console.log(this.customerExemptionForm.get('custCategory').value);
    };
    return CustomerexemptionselectionComponent;
}());
CustomerexemptionselectionComponent = __decorate([
    core_1.Component({
        selector: 'app-customerexemptionselection',
        templateUrl: './customerexemptionselection.component.html'
        //styleUrls: ['./customerexemptionselection.component.css']
    }),
    __metadata("design:paramtypes", [customerexemptionservice_1.customerexemptionservice, forms_1.FormBuilder])
], CustomerexemptionselectionComponent);
exports.CustomerexemptionselectionComponent = CustomerexemptionselectionComponent;
//# sourceMappingURL=customerexemptionselection.component.js.map