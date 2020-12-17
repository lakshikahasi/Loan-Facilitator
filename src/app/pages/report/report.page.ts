import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import * as moment from 'moment';
import { Location } from "@angular/common";


@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  app_id:string;
  data:any;
  data2:any;
  data3:any;
  
  constructor(
    private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private home: Location
  ) { }

  ngOnInit() {
    this.call();
  }

  
  back(){
    this.home.back();
  }


  call(){

    this.storage.get("storage_appid").then((res)=>{
      console.log(res);
      this.app_id=res;
      this.http.get(AccessProviders.server+'/viewagrirepo/'+this.app_id).map(res => res).subscribe((res:any)=>{ 
        //this.storage.set('store_nic',res);
        console.log(res);
        this.data=res.message;

      
         
       });

       this.http.get(AccessProviders.server+'/showARloans/'+this.app_id).map(res => res).subscribe((res:any)=>{ 
        //this.storage.set('store_nic',res);
        console.log(res);
        this.data2=res.message;
         
         
       });

       this.http.get(AccessProviders.server+'/showestimate/'+this.app_id).map(res => res).subscribe((res:any)=>{ 
        //this.storage.set('store_nic',res);
        console.log(res);
        this.data3=res.message;
         
         
       });

    });


}


where(){
  this.storage.set('storage_location',this.app_id);
  
  this.router.navigate(['/location']);
}


}