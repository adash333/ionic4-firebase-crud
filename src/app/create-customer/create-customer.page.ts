import { Component, OnInit } from '@angular/core';

import { Customer } from '../models/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.page.html',
  styleUrls: ['./create-customer.page.scss'],
})
export class CreateCustomerPage implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.customer);
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
