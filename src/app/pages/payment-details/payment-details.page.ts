import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {

  nic:string="";
  bank_id:string="";
  obtain_id:string[];
  //loan_name:string="";
  items:any;
  dat: any;

  length:number;

  constructor(
    private router:Router,
    private storage: Storage,
    public http: HttpClient,
    private acessPr: AccessProviders,
  ) {
   }

  ngOnInit() {
    //this.showDetails();
  }

  showDetails(){
    this.storage.get('storage_borrower').then((val) => {
      console.log('val taken by storage borrower',  val);
      this.items=val;
      console.log('items are ', this.items);
      console.log('application id is', this.items[0].id);


      /* this.installmentValue=this.items[0].amount/this.items[0].no_of_installment;
      console.log('this.items.borrowed_amount is ', this.items[0].amount);
      console.log('this.items.no_of_installment is ', this.items[0].no_of_installment);
      console.log('this.installmentValue is ', this.installmentValue); */

      length = this.items.length;
      console.log('length of items array is ', length);

      for(let i=0; i<length;i++){
        this.items[i].period_years=this.items[i].no_of_installment/12;
        this.items[i].interest=this.items[i].amount*this.items[i].interest_rate/100*this.items[i].no_of_installment/12;
        this.items[i].installment_without_interest=this.items[i].amount/this.items[i].no_of_installment;
        this.items[i].overall_to_be_paid=this.items[i].amount+this.items[i].interest;
        this.items[i].remaining_to_be_paid=this.items[i].overall_to_be_paid-this.items[i].total_amount;
        console.log('for of loop ', this.items[i].overall_to_be_paid);
        console.log('amount to be paid here is ', this.items[i].remaining_to_be_paid);
      }
      
    });
  }

  updatePayment(){
    this.router.navigate(['/rating']);
  }

}
