import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approved-request-loan',
  templateUrl: './approved-request-loan.page.html',
  styleUrls: ['./approved-request-loan.page.scss'],
})
export class ApprovedRequestLoanPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewApprovedRequest(){
    this.router.navigate(['/approved-request-view']);
  }

}
