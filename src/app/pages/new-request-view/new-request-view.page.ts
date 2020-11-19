import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../pro/access';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-request-view',
  templateUrl: './new-request-view.page.html',
  styleUrls: ['./new-request-view.page.scss'],
})
export class NewRequestViewPage implements OnInit {
  appid:string="";
  items : any[];
  loan_id:string="";

  choose:string="";
  nameini:string="";

  constructor(private router: Router,
    public storage:Storage,
    private acessPr:AccessProviders,
    public http:HttpClient,
    public actionSheetController: ActionSheetController,
    public alertCtrl:AlertController) { }

  ngOnInit() {

    this.storage.get("storage_loan").then((val)=>{
      console.log(val);
      this.loan_id=val;
    });
    this.storage.get("storage_appid").then((val)=>{
      console.log(val);
      this.appid=val;
   
  
    

    console.log(this.appid);
    this.http.get(AccessProviders.server+'/showfarmerdetails/'+this.appid).map(res => res).subscribe((res:any)=>{ 
      //this.items=res;
      console.log(res);
      this.items=res.message;
      console.log(this.items);

      this.choose=this.items[0].choose;
      this.nameini=this.items[0].nameini;

      //this.choose=this.items.choose;
      console.log(this.choose);
      //console.log(this.items.nameini);
 

   });

  });
  

   
  }

  viewPersonalInfo(){
    this.router.navigate(['/personal-details-view']);
  }

  viewApplicationForm(){
    
  }


 async Approve(){
    let confirm = await this.alertCtrl.create({
      header: 'Do you Approve this Application ?',
      //message: '',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            //console.log('Agree clicked');
            this.postapprovedata(this.loan_id,this.appid);
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');            
          }
        }
        
      ]
    });
    confirm.present();
  }

  statePending(){
    this.router.navigate(['/pending-reason']);
  }


  async postapprovedata(loan_id:string,appid:string){
    //console.log(id);
    var date=new Date();
    console.log(date)

    let body={
      date:new Date(),
      application_id:this.appid,
      loan_id:this.loan_id,
    }

  }

}
