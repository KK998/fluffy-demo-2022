import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './login/form/form.component';
import { OrderListingComponent } from './orders/order-listing/order-listing.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: "",
    component: FormComponent
  },
  {
    path: "orders",
    canActivate: [AuthService],
    component: OrderListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
