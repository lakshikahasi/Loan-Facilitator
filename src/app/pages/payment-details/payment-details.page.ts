import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro/access';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {

  nic:string="";
  bank_id:string="";
  //obtain_id:string[];
  //loan_name:string="";
  items:any;
  dat: any;
  values:any;
  payments:any;

  length:number;
  leng:any;

  paid_amount:number;
  to_be_paid_amount:number;
  to_be_paid_date:string;
  //whole_amount_to_be_paid:number;

  Installment_date:string="";
  Installment:number;
  obtain_id:number;
  payment_id:number;
  loan_id:string="";
  rating_no:number;

  addition:any;


  disableButton;

  constructor(
    private router:Router,
    private storage: Storage,
    public http: HttpClient,
    private acessPr: AccessProviders,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
  ) {
   }

  ngOnInit() {
    this.showDetails();
  }

  showDetails(){
    this.storage.get('storage_borrower').then((val) => {
      console.log('val taken by storage borrower',  val);
      this.items=val;
      console.log('items are ', this.items);
      console.log('total amount here is', this.items[0].total_amount);


      /* this.installmentValue=this.items[0].amount/this.items[0].no_of_installment;
      console.log('this.items.borrowed_amount is ', this.items[0].amount);
      console.log('this.items.no_of_installment is ', this.items[0].no_of_installment);
      console.log('this.installmentValue is ', this.installmentValue); */

      length = this.items.length;
      console.log('length of items array is ', length);

      this.storage.get('storage_borrower').then((val2)=>{
        console.log('val12 values are ', val2);
        this.obtain_id=val2[0].obtain_id;
        console.log('obtained id is ', this.obtain_id);
        this.http.get(AccessProviders.server+'/getPayments/'+this.obtain_id).map(res=>res).subscribe((res:any)=>{
          this.values=res.message;
          console.log('payment details are ', this.values);
          console.log('date paid is ', this.values[0].Installment_date);
        });
      });

      //leng = this.values.message;
      //console.log('length of payments array is ', leng);

      //this.whole_amount_to_be_paid=this.items[0].amount+this.items[0].interest;
      //console.log('whole amount to be paid is ', this.whole_amount_to_be_paid);

      for(let i=0; i<length;i++){
        this.items[i].period_years=this.items[i].no_of_installment/12;
        this.items[i].interest=this.items[i].amount*this.items[i].interest_rate/100*this.items[i].no_of_installment/12;
        this.items[i].installment_without_interest=this.items[i].amount/this.items[i].no_of_installment;
        this.items[i].overall_to_be_paid=this.items[i].amount+this.items[i].interest;
        this.items[i].remaining_to_be_paid=this.items[i].overall_to_be_paid-this.items[i].total_amount;
        console.log('for of loop ', this.items[i].overall_to_be_paid);
        console.log('amount to be paid here is ', this.items[i].remaining_to_be_paid);
      }

      this.storage.set('storage_payment', this.values);
      this.storage.get('storage_payment').then((val3)=>{
        console.log('val3 values are ', val3);
        this.http.get(AccessProviders.server+'/getLastRecordPayments').map(res=>res).subscribe((res:any)=>{
          this.payments=res.message;
          console.log('last payments details are ', this.payments);
          this.obtain_id=this.payments.obtain_id;
          this.payment_id=this.payments.payment_id+1;
          this.loan_id=this.payments.loan_id;
          this.paid_amount=this.payments.paid_amount;
          this.to_be_paid_amount= this.payments.to_be_paid_amount;
          this.to_be_paid_date=this.payments.to_be_paid_date;
          this.rating_no=this.payments.rating_no;
          console.log('payments paid amount is ', this.paid_amount);
        });
      });


      
    });
  }

  async updatePayment(){
    this.addition=this.paid_amount+this.Installment;
    console.log('total paid is ', this.addition);

    if(this.Installment_date==""){
      this.presentToast("Date of paid is required")
    }else if(this.Installment==null){
      this.presentToast("Paid amount is require");
    }else{
      this.disableButton=true;
      const loader=await this.loadingCtrl.create({
        message: 'Please wait..'
      });
      loader.present();
      return new Promise(resoler=>{
        let body={
          Installment_date: this.Installment_date,
          Installment: this.Installment,
          obtain_id: this.obtain_id,
          payment_id: this.payment_id,
          loan_id: this.loan_id,
          //{this.properties.n1 + this.properties.n2},
          //paid_amount: {number:this.paid_amount+this.Installment},
          paid_amount: this.addition,
          to_be_paid_amount: this.to_be_paid_amount-this.Installment,
          to_be_paid_date: this.to_be_paid_date,
          //this.nextDate= new Date(+new Date() + 86400000+ 86400000).toISOString();
          rating_no: this.rating_no,
        }
        this.acessPr.postPayment(body).subscribe((data:any)=>{
          if(data.status==true){
            loader.dismiss();
            this.disableButton=false;
            this.presentToast(data.message);
            //this.presentToast("Successfully added the loan");
            this.router.navigate(['/rating']);

          }else{
            loader.dismiss();
            this.disableButton=false;
            this.presentToast(data.message);
          }
        },(err=>{
          loader.dismiss();
          this.disableButton=false;
          this.presentAlert('Timeout');
        })
        );
      });
    }
    
  }


  async presentToast(msg){
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'top'
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
            this.updatePayment();
            console.log('Try same attempt again')
          }
        }
      ]
    });
    await alert.present();
  }

}
