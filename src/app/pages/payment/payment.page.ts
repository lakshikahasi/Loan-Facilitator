import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(){
    this.router.navigate(['/payment-confirm']);
  }

}
