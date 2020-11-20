import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-obtained-loans',
  templateUrl: './obtained-loans.page.html',
  styleUrls: ['./obtained-loans.page.scss'],
})
export class ObtainedLoansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkNewAswenna(){
    this.router.navigate(['/obtained-loans-loan']);
  }

  checkNewNCRCS(){

  }

}
