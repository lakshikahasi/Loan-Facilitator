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

  viewApprovedPersonalInfo(){
    this.router.navigate(['/personal-details-view'])
  }

  viewApprovedApplicationForm(){
    this.router.navigate(['/applicationview'])
  }

}
