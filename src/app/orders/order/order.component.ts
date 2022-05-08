import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/services/orders';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  ngOnInit(): void {

  }

  @Input() order!: Order;
}
