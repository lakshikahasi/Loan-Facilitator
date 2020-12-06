import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { User, AccessProviders } from '../../pro/access';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { promise } from 'protractor';
import { duration } from 'moment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  nic:string="";
  items:any;
  bank_id:string="";

  disableButton;

  constructor(private router: Router,
    private storage:Storage,
    private accessPr:AccessProviders, 
    public http:HttpClient, 
    private loadingCtrl:LoadingController,
    private toastCtrl:ToastController,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.getBorrowers();
  }


  getBorrowers(){
    this.storage.get('storage_XXX').then((val)=>{
      console.log('bank id is ', val.bank_id);
    })
  }


  /* search(){
    this.router.navigate(['/payment-confirm']);
  } */

  search(event:any){

  }

  async Search(event:any){
    /* if(this.nic==""){
      console.log('Enter a nic');
    }else{
      this.disableButton = true;
      const loader = await this.loadingCtrl.create({
        message:'wait..',
      });
      loader.present();

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
        if(res.status==true){
          loader.dismiss();
          this.disableButton=false;
          //this.presentToast(data.message);
          this.presentToast("Successfully updated the loan");
          this.router.navigate(['/intro']);

        }else{
          loader.dismiss();
          this.disableButton=false;
          this.presentToast(res.message);
        }
      },(err=>{
        loader.dismiss();
        this.disableButton=false;
        this.presentAlert('Timeout');
      })
      );
      });
    }
     */
    console.log('myyy id taken is', event.target.id);


    if(this.nic==""){
      this.presentToast('Enter a NIC number to continue');
    }else{
      this.disableButton=true;
      const loader = await this.loadingCtrl.create({
        message: 'Please wait..',
        //duration: 1000
      });
      loader.present();

      return new Promise(resoler=>{
        let body={
          nic:this.nic,
        }

        this.accessPr.postBorrower(body, this.nic).subscribe((res:any)=>{
          if(res.status==true){
            loader.dismiss();
            this.disableButton=false;
            this.presentToast(res.message);
            
            //this.navCtrl.push(paymentConfirm, {id:nic});

            this.router.navigate(['/payment-confirm']);
            console.log('nic data ', res.data);
            this.items=res.data;
            console.log('res data ',this.items);
            console.log('nic is ',this.items[0].nic);

            this.nic=event.target.id;
            console.log('id taken done ', this.nic);
            this.storage.set('storage_nic', this.nic);
            this.storage.get('storage_nic').then((res)=>{
            console.log('abc is ', res);
            });
            
          }

          else{
            loader.dismiss();
            this.disableButton=false;
            this.presentToast(res.message);
          }
        },(err=>{
          loader.dismiss();
          this.disableButton=false;
          this.presentAlert('Timeout');
        }));

      });

      
}

      /* try{
        this.storage.get('storage_XXX').then((val) => {
          console.log('bank id is',  val.bank_id);
          //this.bank_id=val.bank_id;
    
          this.http.get(AccessProviders.server+'/getFarmerLoans/'+this.nic).map(res => res).subscribe(res=>{ 
            this.items=res;
            console.log(this.items);
            console.log(this.items.loan_name);
            //console.log(this.bank_id);
            //console.log(res);
          });
          this.router.navigate(['/payment-confirm']);
        });
      }catch{
        console.log('wrong nic')
      } */
    }
  

  async presentToast(a){
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  async presentAlert(msg){
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: msg,

      buttons: [
        {
          text: 'close',
          handler: () => {
            console.log('close attempt');
          }
        },{
          text: 'Try Again',
          handler: () => {
            this.Search(event);
            console.log('Try same attempt again')
          }
        }
      ]
    });
    await alert.present();
  }

}
