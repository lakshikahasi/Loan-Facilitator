import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { User, AccessProviders } from '../../pro/access';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { promise } from 'protractor';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  nic:string="";
  items:any;

  disableButton;

  constructor(private router: Router,
    private storage:Storage,
    private accessPr:AccessProviders, 
    public http:HttpClient, 
    private loadingCtrl:LoadingController,
    private toastCtrl:ToastController,
  ) { }

  ngOnInit() {
  }

  search(){
    this.router.navigate(['/payment-confirm']);
  }

  async Search(){
    if(this.nic==""){

    }else{
      this.disableButton = true;
      /* const loader = await this.loadingCtrl.create({
        message:'wait..',
      });
      loader.present(); */

      return new Promise(resoler=>{
        let body={
          nic:this.nic,
        }
        this.accessPr.postSearch(body).map(res=>res).subscribe((res:any)=>{
          if(res.status==true){
            //loader.dismiss();
            this.disableButton=false;
            this.presentToast(res.message);
            this.storage.set('storage_nic', res.data);
            console.log('data are ', res.data);
            this.router.navigate(['/payment-confirm']);
          }else{
            //loader.dismiss();
            this.disableButton=false;
            this.presentToast(res.message);
          }
        });
      });
    }
    
  }

  async presentToast(a){
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }

}
