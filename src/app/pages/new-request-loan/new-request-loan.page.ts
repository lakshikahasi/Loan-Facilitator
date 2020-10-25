import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-request-loan',
  templateUrl: './new-request-loan.page.html',
  styleUrls: ['./new-request-loan.page.scss'],
})
export class NewRequestLoanPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewNewRequest(){
    this.router.navigate(['/new-request-view']);
  }

}
