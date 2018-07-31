import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'customers/:key', loadChildren: './customer-details/customer-details.module#CustomerDetailsPageModule' },
  { path: 'CreateCustomer', loadChildren: './create-customer/create-customer.module#CreateCustomerPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
