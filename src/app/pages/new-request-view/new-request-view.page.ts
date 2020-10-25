import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-request-view',
  templateUrl: './new-request-view.page.html',
  styleUrls: ['./new-request-view.page.scss'],
})
export class NewRequestViewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewPersonalInfo(){
    this.router.navigate(['/personal-details-view']);
  }

  viewApplicationForm(){
    
  }

  Approve(){

  }

  statePending(){
    this.router.navigate(['/pending-reason']);
  }

}
