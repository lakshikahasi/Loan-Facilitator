import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.page.html',
  styleUrls: ['./payment-confirm.page.scss'],
})
export class PaymentConfirmPage implements OnInit {

  nic:string="";
  bank_id:string="";
  //loan_name:string="";
  items:any;
  dat: string="";

  constructor(
    private router:Router,
    private storage: Storage,
    public http: HttpClient,
    private acessPr: AccessProviders,
  ) { }

  ngOnInit() {
    this.showDetails();
  }

  updatePayment(){
    this.router.navigate(['/rating']);
  }

  showDetails(){
    this.storage.get('storage_XXX').then((val) => {
      console.log('bank id is',  val.nic);
      this.nic=val.nic;

      this.http.get(AccessProviders.server+'/getFarmerLoans2/'+this.nic).map(res => res).subscribe(res=>{ 
        this.items=res;
        console.log('payment info are ', this.items);
        console.log('payment amount is ', this.items.amount);
        //console.log(this.bank_id);
        //console.log(res);
      });
      //this.router.navigate(['/payment-confirm']);
    });
  }

}
