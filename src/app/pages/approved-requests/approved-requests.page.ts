import { getLocaleNumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-approved-requests',
  templateUrl: './approved-requests.page.html',
  styleUrls: ['./approved-requests.page.scss'],
})
export class ApprovedRequestsPage implements OnInit {
   //loan_name:string="";
   date:string="";
   nameini:string="";
   loan_id:string="";
   //nic:string="";
   items:any;
   dat:string="";
   bank_id:string;

  constructor(
    private router: Router,
    private storage:Storage,
    public accessPr: AccessProviders,
    private http: HttpClient,) { }

  ngOnInit() {
    this.getLoans();
    
  }

  getLoans(){
    this.storage.get('storage_XXX').then((val) => {
      console.log('bank id is',  val.bank_id);
      this.bank_id=val.bank_id;

      this.http.get(AccessProviders.server+'/getLoans/'+this.bank_id).map(res => res).subscribe(res=>{ 
        this.items=res;
        console.log(this.items);
        console.log(this.items.loan_name);
        //console.log(this.bank_id);
        //console.log(res);


      });

    });
  }

  ViewLoans(event:any){

    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_loan',this.dat);
   
    this.storage.get("storage_loan").then((res)=>{
      console.log(res);
    });
  
    this.router.navigate(['/approved-request-loan']);
  }

  checkApprovedAswenna(){
   // this.router.navigate(['/approved-request-loan']);
  }

  checkApprovedNCRCS(){
    
  }

}
