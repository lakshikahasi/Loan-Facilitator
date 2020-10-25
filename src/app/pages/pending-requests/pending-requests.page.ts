import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.page.html',
  styleUrls: ['./pending-requests.page.scss'],
})
export class PendingRequestsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkPendingAswenna(){
    this.router.navigate(['/pending-request-loan'])
  }

  checkPendingNCRCS(){
    
  }

}
