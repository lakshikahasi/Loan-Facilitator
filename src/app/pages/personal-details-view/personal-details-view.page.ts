import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../pro/access';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';


@Component({
  selector: 'app-personal-details-view',
  templateUrl: './personal-details-view.page.html',
  styleUrls: ['./personal-details-view.page.scss'],
})
export class PersonalDetailsViewPage implements OnInit {
  appid:string="";
  items : any;

  choose:string="";
  nameini:string="";
  namefull:string="";
  address :string="";
  TpNo :string="";
  dob:string="";
  nic:string="";

  constructor(
    public storage:Storage,
    private acessPr:AccessProviders,
    public http:HttpClient
  ) { }

  ngOnInit() {
    this.storage.get("storage_appid").then((val)=>{
      console.log(val);
      this.appid=val;
   
  
    

    console.log(this.appid);
    this.http.get(AccessProviders.server+'/showfarmerdetails/'+this.appid).map(res => res).subscribe((res:any)=>{ 
      //this.items=res;
      console.log(res);
      this.items=res.message;
      console.log(this.items);
      //this.choose=this.items.choose;
      //console.log(this.choose);
      //console.log(this.items.nameini);
 

   });

  });
  }

}
