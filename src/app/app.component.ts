import { Component } from '@angular/core';
import { CustomerInformationService } from './services/customerinformation.service';
import { customerexemptionservice } from './services/customerexemptionservice';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    constructor(private customerinformationservice: CustomerInformationService, private customerexemptionservice: customerexemptionservice) {
    }

    //ngOnInit() {      
    //    this.customerinformationservice.enableExemptionSelection = false;
    //    this.customerexemptionservice.enableTreeView = false;
    //}
}
