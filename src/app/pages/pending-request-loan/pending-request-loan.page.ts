import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pending-request-loan',
  templateUrl: './pending-request-loan.page.html',
  styleUrls: ['./pending-request-loan.page.scss'],
})
export class PendingRequestLoanPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewPendingRequest(){
    this.router.navigate(['/pending-request-view']);
  }

}
