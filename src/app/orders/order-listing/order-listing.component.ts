import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/services/orders';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-listing',
  templateUrl: './order-listing.component.html',
  styleUrls: ['./order-listing.component.scss']
})
export class OrderListingComponent implements OnInit {
  orders: Order[] = []
  createOrderEnabled: boolean = false
  constructor(private OrdersService: OrdersService) { }

  ngOnInit(): void {
    this.OrdersService.getOrders().subscribe(orders => this.orders = orders)
  }

  handleNewOrderClick() {
    this.createOrderEnabled = !this.createOrderEnabled
  }
}
