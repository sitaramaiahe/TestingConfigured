"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var searchcustomer_component_1 = require("./searchcustomer/searchcustomer.component");
var customerinformation_service_1 = require("../app/services/customerinformation.service");
var createcustomer_component_1 = require("./createcustomer/createcustomer.component");
var treeview_component_1 = require("./treeview/treeview.component");
var customerexemptionselection_component_1 = require("./exemptionselection/customerexemptionselection.component");
var customerexemptionservice_1 = require("../app/services/customerexemptionservice");
var appRoutes = [
    { path: 'search', component: searchcustomer_component_1.SearchcustomerComponent },
    { path: 'create', component: createcustomer_component_1.CreatecustomerComponent },
    { path: 'create/:ein', component: createcustomer_component_1.CreatecustomerComponent },
    { path: 'treeview', component: treeview_component_1.TreeviewComponent },
    { path: 'exemption', component: customerexemptionselection_component_1.CustomerexemptionselectionComponent },
    { path: '', redirectTo: '/search', pathMatch: 'full' }
    //{ path: '**', component: SearchcustomerComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            searchcustomer_component_1.SearchcustomerComponent,
            createcustomer_component_1.CreatecustomerComponent,
            treeview_component_1.TreeviewComponent,
            customerexemptionselection_component_1.CustomerexemptionselectionComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        providers: [customerinformation_service_1.CustomerInformationService, customerexemptionservice_1.customerexemptionservice],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map