import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderComponent } from './order/order.component';
import { OrderListingComponent } from './order-listing/order-listing.component';
import { MatExpansionModule } from "@angular/material/expansion"
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    AddOrderComponent,
    OrderComponent,
    OrderListingComponent
  ],
  exports: [
    AddOrderComponent,
    OrderComponent,
    OrderListingComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ]
})
export class OrdersModule { }
