import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obtained-loans-loan',
  templateUrl: './obtained-loans-loan.page.html',
  styleUrls: ['./obtained-loans-loan.page.scss'],
})
export class ObtainedLoansLoanPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewObtainedLoans(){
    this.router.navigate(['/obtained-loan-view']);
  }

}
