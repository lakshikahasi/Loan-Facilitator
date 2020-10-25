import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-requests',
  templateUrl: './new-requests.page.html',
  styleUrls: ['./new-requests.page.scss'],
})
export class NewRequestsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkNewAswenna(){
    this.router.navigate(['/new-request-loan']);
  }

  checkNewNCRCS(){

  }

}
