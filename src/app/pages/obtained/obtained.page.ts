import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

import * as moment from 'moment';

@Component({
  selector: 'app-obtained',
  templateUrl: './obtained.page.html',
  styleUrls: ['./obtained.page.scss'],
})
export class ObtainedPage implements OnInit {
  today = new Date();
  istoday = new Date();
  
  application_id:string="";
  loan_id:string="";
  d:any;

  issued_date:string;
  amount:number;
  months:number;
  expired_date:any;
  installment:number;



  constructor(
    private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
  ) {

    
   }

  ngOnInit() {
    this.issued_date = moment(this.istoday).format('YYYY-MM-DD')
    console.log(this.today);
    //console.log(this.issued_date);

    this.storage.get("storage_appid").then((val)=>{
      console.log(val);
      this.application_id=val;

    });

  }

  details(){
    console.log(this.months);
    console.log(this.amount);
    console.log(this.application_id);

    this.issued_date=moment(this.istoday).format('YYYY-MM-DD');
    this.d=moment(this.issued_date).add(this.months, 'M');
    console.log("d is",this.d._d);
    this.expired_date=moment(this.d._d).format('YYYY-MM-DD');
    console.log("ori ",this.expired_date);

    
    this.storage.get("storage_loan").then((res)=>{
      console.log(res);
      this.loan_id = res;


    this.installment=this.amount/this.months;

    let body={
      application_id:this.application_id,
      loan_id:this.loan_id,
      Issued_date:this.issued_date,
      expired_date:this.expired_date,
      amount:this.amount,
      installment:this.installment,
      no_of_installment:this.months
    }

    console.log("body ",body);

    this.acessPr.postobtain(body).subscribe((res:any)=>{
      if(res.status==true){
        //console.log("true");
       
      }

      else{
        this.router.navigate(['/approved-request-view']);

      }

    });

  });




  }

}
