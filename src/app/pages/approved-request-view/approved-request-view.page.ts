import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approved-request-view',
  templateUrl: './approved-request-view.page.html',
  styleUrls: ['./approved-request-view.page.scss'],
})
export class ApprovedRequestViewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewApprovedPersonalInfo(){
    this.router.navigate(['/personal-details-view'])
  }

  viewApprovedApplicationForm(){

  }

}
