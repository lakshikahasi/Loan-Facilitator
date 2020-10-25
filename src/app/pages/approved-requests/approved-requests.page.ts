import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approved-requests',
  templateUrl: './approved-requests.page.html',
  styleUrls: ['./approved-requests.page.scss'],
})
export class ApprovedRequestsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkApprovedAswenna(){
    this.router.navigate(['/approved-request-loan']);
  }

  checkApprovedNCRCS(){
    
  }

}
