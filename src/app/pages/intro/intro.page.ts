import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  
  public items : any;
  bank_id:string="";
  bank_logo:string="";
  bank_name:string="";



  constructor( private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,) {
      this.getdata();
     
    
    }

    getdata(){
        this.storage.get('storage_XXX').then((val:any) => {
          
                  console.log('Your id is',  val.bank_id);
                  this.bank_id=val.bank_id;
                  console.log("this.bank_id", this.bank_id);
            
        
        this.http.get(AccessProviders.server+'/bankdetails/'+this.bank_id).map(res => res).subscribe(res=>{ 
        this.items=res;
        console.log(res);
        this.bank_logo=this.items.bank_logo;
        console.log(this.bank_logo);
        this.bank_name=this.items.bank_name;
        console.log(this.bank_name);

        



        
      });
    });
    }

  ngOnInit() {
  }

  changeLoanDetails(){
    //this.router.navigate(['/loan-details']);

    
  }

  checkLoanRequests(){
    this.router.navigate(['/loan-requests']);
  }

  viewPayments(){
    this.router.navigate(['/payment']);
  }

}
