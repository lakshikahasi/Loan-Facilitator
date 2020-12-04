import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro/access';
import { ModalController } from '@ionic/angular';
import { Binary } from '@angular/compiler';
//import { ModelPagePage } from '../model-page/model-page.page';
//import { ModelPagePageModule } from '../model-page/model-page.module';

@Component({
  selector: 'app-edit-loans',
  templateUrl: './edit-loans.page.html',
  styleUrls: ['./edit-loans.page.scss'],
})
export class EditLoansPage implements OnInit {

  bank_id:string="";
  loan_id:string="";
  loan_name:string="";
  genera_info:string="";
  specific_info:string="";
  eligible_borrowers:string="";
  eligible_crops:string="";
  maximum_loanamount:string="";
  Rateofinterest:string="";
  Repaymentperiod:string="";
  more_info:string="";
  loan_logo:Binary;

  items:any;
  dat:any;

  constructor(
    private storage: Storage,
    public http: HttpClient,
    private acessPr: AccessProviders,
  ) { }

  ngOnInit() {
    this.displayLoans();
  }

  displayLoans(){
    this.storage.get('storage_XXX').then((val:any) => {
      console.log('Your id is', val.bank_id);
      this.bank_id = val.bank_id;
      console.log('this.bank_id is', this.bank_id);

      this.http.get(AccessProviders.server+'/getLoans/'+this.bank_id).map(res => res).subscribe(res=>{ 
        this.items=res;
        console.log('a', this.items);
        console.log('b', this.items[0].loan_name);
      });
    });
  }

  displayLoanDetails(event:any){
  
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_loan',this.dat);
   
    this.storage.get('storage_loan').then((val:any) => {

      this.http.get(AccessProviders.server+'/getLoanDetails/'+this.dat).map(res => res).subscribe(res=>{ 
        this.dat=res;
        console.log('loan details are ', this.dat);
        console.log('loan name is ', this.dat.loan_name);

        this.loan_name=this.dat.loan_name;
        console.log('loan name again ', this.loan_name);

        this.genera_info=this.dat.genera_info;
        this.specific_info=this.dat.specific_info;
        this.eligible_borrowers=this.dat.eligible_borrowers;
        this.eligible_crops=this.dat.eligible_crops;
        this.maximum_loanamount=this.dat.maximum_loanamount;
        this.Rateofinterest=this.dat.Rateofinterest;
        this.Repaymentperiod=this.dat.Repaymentperiod;
        this.more_info=this.dat.more_info;
        this.loan_logo=this.dat.loan_logo;
      });
    });
  }

  updateLoan(){
    this.storage.get('storage_loan').then((val:any) => {
      console.log('dat is ', this.dat);
      console.log('dat.loan_id is ', this.dat.loan_id);

      this.http.post(AccessProviders.server+'/updateLoan/'+this.dat.loan_id, {
        genera_info: this.genera_info,
        loan_name: this.loan_name,
        specific_info: this.specific_info,
        eligible_borrowers: this.eligible_borrowers,
        eligible_crops: this.eligible_crops,
        maximum_loanamount: this.maximum_loanamount,
        Rateofinterest: this.Rateofinterest,
        Repaymentperiod: this.Repaymentperiod,
        more_info: this.more_info,
        loan_logo: this.loan_logo,

      }).subscribe((response)=>{
        console.log('res is ', response);
      })
    });
  }

}
