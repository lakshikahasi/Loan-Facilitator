import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-obtained-loan-view',
  templateUrl: './obtained-loan-view.page.html',
  styleUrls: ['./obtained-loan-view.page.scss'],
})
export class ObtainedLoanViewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewObtainedPersonalInfo(){
    this.router.navigate(['/personal-details-view']);
  }

  viewObtainedApplicationForm(){
    
  }

}
