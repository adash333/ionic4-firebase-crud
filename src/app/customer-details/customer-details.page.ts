import { Component, OnInit } from '@angular/core';
 
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
 
import { Location } from '@angular/common';
 
import { Observable } from 'rxjs';
 
import { Customer } from '../models/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})
export class CustomerDetailsPage implements OnInit {

  customer$: Observable<Customer>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCustomer();
  }
  
  getCustomer(): void {
    let url = this.router.url;
    console.log(url);
    let key = url.substr( 11 );
    console.log(key);
  }

}
