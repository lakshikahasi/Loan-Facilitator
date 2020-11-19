import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../pro/access';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';


@Component({
  selector: 'app-new-request-loan',
  templateUrl: './new-request-loan.page.html',
  styleUrls: ['./new-request-loan.page.scss'],
})
export class NewRequestLoanPage implements OnInit {
  loan_id:string="";
  items : any;
  nameini:string="";
  date:string="";
  dat:string="";

  constructor(private router: Router,
    public storage:Storage,
    private acessPr:AccessProviders,
    public http:HttpClient,) { }

  ngOnInit() {
    this.storage.get("storage_loan").then((val)=>{
      console.log(val);
      this.loan_id=val;
   
  
    

    console.log(this.loan_id);
    this.http.get(AccessProviders.server+'/showapplications/'+this.loan_id).map(res => res).subscribe((res:any)=>{ 
      this.items=res.message;
      console.log(this.items);
      //console.log(this.items.nameini);
 

   });

  });

  // console.log("i items",this.items);
  }


  //console.log(this.items);

  Viewrequest(event:any){

    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_appid',this.dat);
   
    this.storage.get("storage_appid").then((res)=>{
      console.log(res);
    });
  
    this.router.navigate(['/new-request-view']);
  }
  
 
}
