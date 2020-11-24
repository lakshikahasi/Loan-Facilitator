import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

import * as moment from 'moment';

@Component({
  selector: 'app-pending-reason',
  templateUrl: './pending-reason.page.html',
  styleUrls: ['./pending-reason.page.scss'],
})
export class PendingReasonPage implements OnInit {
  today = new Date();
  rejected_date:string;
  rejected_reason:string;
  application_id:string="";
  loan_id:string="";
  constructor(
    private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
  ) { }

  ngOnInit() {
    this.rejected_date = moment(this.today).format('YYYY-MM-DD')
    console.log(this.today);
    console.log(this.rejected_date);


    this.storage.get("storage_appid").then((val)=>{
      console.log(val);
      this.application_id=val;

    });

    this.storage.get("storage_loan").then((val)=>{
      console.log(val);
      this.loan_id=val;
      console.log(this.loan_id);
    });

  }

  submitPending(){
    console.log(this.application_id);
    console.log(this.loan_id);

    if(this.rejected_reason==""){
      this.presentToast("reason is required");
    }
    else{
      let body={
        application_id:this.application_id,
        loan_id:this.loan_id,
        rejected_reason:this.rejected_reason,
        rejected_date:this.rejected_date

      }

      this.acessPr.postreason(body).subscribe((res:any)=>{
        if(res.status==true){
            console.log(res);

            this.http.get(AccessProviders.server+'/dltreject/'+this.application_id).map(res=>res).subscribe((res:any)=>{
             // this.items=res.message;
              console.log();
            });
            this.router.navigate(['/new-request-loan']);
            

        }
        else{
          console.log(res);
        }

      });

    }

   
    
  }

  async presentToast(a) {
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 3000,
      position: 'bottom'
    });
  toast.present();
  }


}
