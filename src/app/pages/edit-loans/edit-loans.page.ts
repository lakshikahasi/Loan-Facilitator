import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {ToastController, LoadingController, AlertController, NavController} from '@ionic/angular';
import {User, AccessProviders} from '../../pro/access';

@Component({
  selector: 'app-edit-loans',
  templateUrl: './edit-loans.page.html',
  styleUrls: ['./edit-loans.page.scss'],
})
export class EditLoansPage implements OnInit {
  loanid:string="";
  bank_id:string;
  items:any;
  constructor(private router: Router,
    private storage:Storage,
    public http:HttpClient,
  ) { }

  ngOnInit() {
    this.storage.get('storage_XXX').then((val:any) => {
      console.log('Your id is', val.bank_id);
      this.bank_id = val.bank_id;
      console.log('this.bank_id is', this.bank_id);

      this.http.get(AccessProviders.server+'/getLoans/'+this.bank_id).map(res => res).subscribe(res =>{
        this.items=res;
        console.log(res);
      });
  });


  console.log(this.loanid);
}

}
