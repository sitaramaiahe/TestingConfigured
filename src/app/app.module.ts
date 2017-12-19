import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { CustomerInformationService } from '../app/services/customerinformation.service';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { CustomerexemptionselectionComponent } from './exemptionselection/customerexemptionselection.component';
import { customerexemptionservice } from '../app/services/customerexemptionservice';

const appRoutes: Routes = [
  { path: 'search', component: SearchcustomerComponent },
  { path: 'create', component: CreatecustomerComponent },
  { path: 'create/:ein', component: CreatecustomerComponent }, 
  { path: 'treeview', component: TreeviewComponent },
  { path: 'exemption', component: CustomerexemptionselectionComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
  //{ path: '**', component: SearchcustomerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchcustomerComponent,
    CreatecustomerComponent,
    TreeviewComponent,
    CustomerexemptionselectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerInformationService, customerexemptionservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
