import { getLocaleNumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-approved-request-view',
  templateUrl: './approved-request-view.page.html',
  styleUrls: ['./approved-request-view.page.scss'],
})
export class ApprovedRequestViewPage implements OnInit {
  date:string="";
  nameini:string="";
  loan_id:string="";
  //nic:string="";
  items:any;
  dat:string="";
  app_id:string="";

  constructor(private router: Router,
    private storage:Storage,
    public accessPr: AccessProviders,
    private http: HttpClient,) { }

    doRefresh(event) {  
      console.log('Pull Event Triggered!');  
      setTimeout(() => {  
        //this.dummyList = Array(10);  
        event.target.complete();  
      }, 2000);  
    }

  ngOnInit() {
    this.storage.get("storage_appid").then((res)=>{
      console.log(res);
      this.app_id=res;
  
      this.http.get(AccessProviders.server+'/getapproveDetailsbyappid/'+this.app_id).map(res=>res).subscribe((res:any)=>{
        this.items=res.message;
        console.log(this.items);
      });
    });

    


  }


  viewApprovedPersonalInfo(event){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_appid',this.dat);

    this.router.navigate(['/personal-details-view'])


    
  }

  viewApprovedApplicationForm(){
    this.router.navigate(['/applicationview'])
  }

  reject(event){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_appid',this.dat);

    this.router.navigate(['/approvereject']);


  }

  obtain(event){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_appid',this.dat);
    
    this.router.navigate(['/obtained']);
  }

}
