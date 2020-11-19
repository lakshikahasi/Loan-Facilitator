import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';


@Component({
  selector: 'app-new-requests',
  templateUrl: './new-requests.page.html',
  styleUrls: ['./new-requests.page.scss'],
})
export class NewRequestsPage implements OnInit {
  bank_id:string="";
  items:any;
  loan_name:string="";
  dat:string="";
  constructor( private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,) { }

  ngOnInit() {
    this.getdata();
  }

  getdata(){
    this.storage.get('storage_XXX').then((val) => {
              console.log('Your age is',  val.bank_id);
              this.bank_id=val.bank_id;
        
              this.http.get(AccessProviders.server+'/getloans/'+this.bank_id).map(res => res).subscribe(res=>{ 
                this.items=res;
                console.log(this.items);
                console.log(this.items.loan_name);
                //console.log(this.bank_id);
                //console.log(res);


              });
        
  });
}

ViewLoans(event:any){

  console.log(event.target.id);
  this.dat=event.target.id;
  console.log(this.dat);
  this.storage.set('storage_loan',this.dat);
 
  this.storage.get("storage_loan").then((res)=>{
    console.log(res);
  });

  this.router.navigate(['/new-request-loan']);
}

 
  

}
