import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pending-request-view',
  templateUrl: './pending-request-view.page.html',
  styleUrls: ['./pending-request-view.page.scss'],
})
export class PendingRequestViewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewPendingPersonalInfo(){
    this.router.navigate(['/personal-details-view']);
  }

  viewPendingApplicationForm(){

  }

}
