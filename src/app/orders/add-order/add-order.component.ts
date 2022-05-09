import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order, OrderDetails, OrderProduct } from 'src/app/services/orders';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  order = new FormGroup({
    omsId: new FormControl(''),
    gtin: new FormControl(''),
    serialNumbers: new FormControl(''),
    templateId: new FormControl(3)
  })

  constructor(private orders: OrdersService) { }

  ngOnInit(): void {
  }

  handleOrderCreate(data: any) {
    const order: Order = {
      omsId: "",
      orderDetails: this.getOrderDetailsFromData(data),
      products: this.getProductsFromData(data)
    }
    if (this.checkIfAllOrderDataPresent(data)) {
      this.orders.addOrder(order).subscribe(res => {
        // display some kind of notification
        // no clue how to rerender orders listing... quick fix is page refresh
        console.log(res)
      });
    }
  }

  protected getOrderDetailsFromData(data: any): OrderDetails {
    const orderDetails: OrderDetails = {
      "factoryId": data?.factoryId || 0,
      "factoryCountry": data?.factoryCountry || "defaultValue",
      "productCode": data.productCode || "defaultValue",
      "productDescription": data.productDescription || "defaultValue",
      "productionLineId": data.productionLineId || "defaultValue"
    };

    return orderDetails;
  }

  protected getProductsFromData(data: any): OrderProduct[] {
    const orderProducts: OrderProduct[] = [];

    return orderProducts;
  }

  protected checkIfAllOrderDataPresent(data: Order): boolean {
    if (!data) return false;
    if (!data.products) {
      // Add more comprehensive check for each product item
      return false;
    }
    if (!data.orderDetails) {
      // Add more comprehensive check for each necessary orderDetails field
      return false;
    }

    return true
  }
}
