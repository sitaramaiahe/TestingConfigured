import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { customerexemptionservice } from '../services/customerexemptionservice';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html'
  //styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {

 treeViewForm: FormGroup;

 constructor(private formBuilder: FormBuilder,
     private router: Router,
     private route: ActivatedRoute) { }

 ngOnInit() {
     this.treeViewForm = this.formBuilder.group({
         Name: ['', [Validators.required, Validators.maxLength(40)]],
         ITIN: ['', [Validators.required, Validators.maxLength(20)]],
         PercentageOwner: ['', [Validators.required, Validators.maxLength(20)]],
     });
  }

}
