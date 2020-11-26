import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../pro/access';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';


@Component({
  selector: 'app-obtained-loan-view',
  templateUrl: './obtained-loan-view.page.html',
  styleUrls: ['./obtained-loan-view.page.scss'],
})
export class ObtainedLoanViewPage implements OnInit {

  appid:string="";
  items:any[];
  loan_id:string="";

  choose:string="";
  nameini:string="";

  constructor(private router: Router,
    public storage:Storage,
    private acessPr:AccessProviders,
    public http:HttpClient,
    public actionSheetController: ActionSheetController,
    public alertCtrl:AlertController,
  ) { }

  ngOnInit() {
    this.storage.get("storage_loan").then((val)=>{
      console.log(val);
      this.loan_id=val;
    });
    this.storage.get("storage_appid").then((val)=>{
      console.log(val);
      this.appid=val;

      console.log(this.appid);
      this.http.get(AccessProviders.server+'/getFarmerDetails/'+this.appid).map(res=>res).subscribe((res:any)=>{
      console.log(res);
      this.items=res.message;
      console.log(this.items);

      this.choose=this.items[0].choose;
      this.nameini=this.items[0].nameini;

      console.log(this.choose);
    });

    });
  }

  viewObtainedPersonalInfo(){
    this.router.navigate(['/personal-details-view']);
  }

  viewObatainedApplicationForm(){
    this.router.navigate(['/application-form-view']);
  }

}
