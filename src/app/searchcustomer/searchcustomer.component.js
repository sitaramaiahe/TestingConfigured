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
var customerinformation_service_1 = require("../services/customerinformation.service");
var customerexemptionservice_1 = require("../services/customerexemptionservice");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var SearchcustomerComponent = (function () {
    function SearchcustomerComponent(formBuilder, router, route, customerinformationservice, customerexemptionservice) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.customerinformationservice = customerinformationservice;
        this.customerexemptionservice = customerexemptionservice;
        this.searchText = "";
        this.selectedSearchRadioButtonValue = "EIN";
        this.radioItems0 = { value: "0", text: "EIN" };
        this.radioItems1 = { value: "1", text: "ENAME" };
        this.radioItems2 = { value: "2", text: "UBO" };
    }
    SearchcustomerComponent.prototype.ngOnInit = function () {
        this.customerinformationservice.enableExemptionSelection = false;
        this.customerexemptionservice.enableTreeView = false;
        this.searchCustomerForm = this.formBuilder.group({
            searchText: this.formBuilder.control(''),
            selectedSearchRadioButtonValue: this.formBuilder.control({})
        });
    };
    SearchcustomerComponent.prototype.onSearchButtonClick = function () {
        var _this = this;
        this._customers =
            this.customerinformationservice.getCustomers().filter(function (c) { return _this.searchCustomerForm.value.searchText != "" && ((_this.searchCustomerForm.value.selectedSearchRadioButtonValue.text == "EIN" && c.ein.indexOf(_this.searchCustomerForm.value.searchText) > -1) ||
                (_this.searchCustomerForm.value.selectedSearchRadioButtonValue.text == "ENAME" && c.entityName.indexOf(_this.searchCustomerForm.value.searchText) > -1) ||
                (_this.searchCustomerForm.value.selectedSearchRadioButtonValue.text == "UBO" && c.ubo.indexOf(_this.searchCustomerForm.value.searchText) > -1)); });
    };
    return SearchcustomerComponent;
}());
SearchcustomerComponent = __decorate([
    core_1.Component({
        selector: 'app-searchcustomer',
        templateUrl: './searchcustomer.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        customerinformation_service_1.CustomerInformationService,
        customerexemptionservice_1.customerexemptionservice])
], SearchcustomerComponent);
exports.SearchcustomerComponent = SearchcustomerComponent;
//# sourceMappingURL=searchcustomer.component.js.map