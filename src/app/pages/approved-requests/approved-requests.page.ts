import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User,AccessProviders } from '../../pro/access';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';

@Component({
  selector: 'app-approved-requests',
  templateUrl: './approved-requests.page.html',
  styleUrls: ['./approved-requests.page.scss'],
})
export class ApprovedRequestsPage implements OnInit {

  /* bank_id:string="";
  items:any;
  loan_name:string=""; */
  date:string="";
   nameini:string="";
   loan_id:string="";
   //nic:string="";
   items:any;
   dat:string="";
   bank_id:string;

  constructor(private router: Router,
    public http:HttpClient,
    private storage:Storage,
    private accessPr:AccessProviders,
  ) { }

  ngOnInit() {
    //this.getLoans();
  }

  getLoans(){
    /* this.storage.get('storage_loans').then((val)=>{
      console.log('val bank id is ',val.bank_id);
      this.bank_id=val.bank_id;
      console.log('bank id is ', this.bank_id);

      this.http.get(AccessProviders.server+'/getLoans/'+this.bank_id).map(res=>res).subscribe(res=>{
        this.items=res;
        console.log(this.items);
        //this.loan_name=this.items.loan_name;
        console.log(this.items.loan_name);
      });
    }); */
      
  }

  checkApprovedAswenna(){
    this.router.navigate(['/approved-request-loan']);
  }

}
