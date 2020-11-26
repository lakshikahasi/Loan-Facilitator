import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { AccessProviders } from 'src/app/pro/access';

@Component({
  selector: 'app-application-form-view',
  templateUrl: './application-form-view.page.html',
  styleUrls: ['./application-form-view.page.scss'],
})
export class ApplicationFormViewPage implements OnInit {

  hideMe = false;
  hidePup = false;
  hideBan = false;
  hideSp = false;
  hidePro = false;
  hideWit = false;

  type:string="";

  items:any;
  repo:any;
  acc:any;

  nic:string="";

  one:string="";
  app_id:number;
  icon:string="chevron-down-outline";
  icon2:string="chevron-down-outline";
  icon3:string="chevron-down-outline";
  icon4:string="chevron-down-outline";
  icon5:string="chevron-down-outline";
  icon6:string="chevron-down-outline";

  constructor(
    private storage:Storage,
    public http:HttpClient,
    private accessPr:AccessProviders,
  ) { }

  ngOnInit() {
    this.storage.get('storage_appid').then((val)=>{
      this.app_id=val;
      console.log(this.app_id);

      this.http.get(AccessProviders.server+'/getApplicantDetails/'+this.app_id).map(res=>res).subscribe((res:any)=>{
        console.log(res.message);
        this.items=res.message;
      });
    });
  }

  set(){
    if(this.hideMe==false){
      this.icon="chevron-up-outline";
      this.hideMe=true;
    }else{
      this.hideMe=false;
      this.icon="chevron-down-outline";
    }
    //this.hideMe=!this.hideMe;
    this.hidePup=false;
    this.icon2="chevron-down-outline";
    this.hideBan=false;
    this.icon4="chevron-down-outline";
    this.hideSp=false;
    this.icon3="chevron-down-outline";
    this.hidePro=false;
    this.icon5="chevron-down-outline";
    this.hideWit=false;
    this.icon6="chevron-down-outline";
  }

  /* setLoanPurposes(){
    if(this.hidePup==false){
      this.icon2="chevron-up-outline";
      this.hidePup=true;
    }else{
      this.hidePup=false;
      this.icon2="chevron-down-outline";
    }
    //this.hideMe=!this.hideMe;
    this.hideMe=false;
    this.icon="chevron-down-outline";
    this.hideBan=false;
    this.icon4="chevron-down-outline";
    this.hideSp=false;
    this.icon3="chevron-down-outline";
    this.hidePro=false;
    this.icon5="chevron-down-outline";
    this.hideWit=false;
    this.icon6="chevron-down-outline";

    this.type="agri";
    this.http.get(AccessProviders.server+'/getReports/'+this.app_id+'/'+this.type).map(res=>res).subscribe((res)=>{
      console.log(res);
      this.repo=res.agr_images;//error here, identify these details at the end
    });
  } */

  setSpouseDetails(){
    if(this.hideSp==false){
      this.icon3="chevron-up-outline";
      this.hideSp=true;
    }else{
      this.hideSp=false;
      this.icon3="chevron-down-outline";
    }
    //this.hideMe=!this.hideMe;
    this.hideMe=false;
    this.icon="chevron-down-outline";
    this.hidePup=false;
    this.icon2="chevron-down-outline";
    this.hideBan=false;
    this.icon4="chevron-down-outline";
    this.hidePro=false;
    this.icon5="chevron-down-outline";
    this.hideWit=false;
    this.icon6="chevron-down-outline";
  }

  setBankDetails(){
    if(this.hideBan==false){
      this.icon4="chevron-up-outline";
      this.hideBan=true;
    }else{
      this.hideBan=false;
      this.icon4="chevron-down-outline";
    }
    //this.hideMe=!this.hideMe;
    this.hideMe=false;
    this.icon="chevron-down-outline";
    this.hidePup=false;
    this.icon2="chevron-down-outline";
    this.hideSp=false;
    this.icon3="chevron-down-outline";
    this.hidePro=false;
    this.icon5="chevron-down-outline";
    this.hideWit=false;
    this.icon6="chevron-down-outline";

    console.log(this.nic);

    this.http.get(AccessProviders.server+'/getAccounts/'+this.nic).map(res=>res).subscribe((res)=>{
      console.log(res);
      this.acc=res;
    });
  }

  setPropertyDetails(){
    if(this.hidePro==false){
      this.icon5="chevron-up-outline";
      this.hideBan=true;
    }else{
      this.hidePro=false;
      this.icon5="chevron-down-outline";
    }
    //this.hideMe=!this.hideMe;
    this.hideMe=false;
    this.icon="chevron-down-outline";
    this.hidePup=false;
    this.icon2="chevron-down-outline";
    this.hideSp=false;
    this.icon3="chevron-down-outline";
    this.hideBan=false;
    this.icon4="chevron-down-outline";
    this.hideWit=false;
    this.icon6="chevron-down-outline";
  }

  setWitnessesDetails(){
    if(this.hideWit==false){
      this.icon6="chevron-up-outline";
      this.hideWit=true;
    }else{
      this.hideWit=false;
      this.icon6="chevron-down-outline";
    }
    //this.hideMe=!this.hideMe;
    this.hideMe=false;
    this.icon="chevron-down-outline";
    this.hidePup=false;
    this.icon2="chevron-down-outline";
    this.hideSp=false;
    this.icon3="chevron-down-outline";
    this.hideBan=false;
    this.icon5="chevron-down-outline";
    this.hideWit=false;
    this.icon6="chevron-down-outline";
  }

}
