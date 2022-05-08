import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Order } from './orders';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private api_root_url = "http://localhost:5000"
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.api_root_url}/orders`)
  }

  getOrder(omsId: string): Observable<Order> {
    return this.http.get<Order>(`${this.api_root_url}/order/${omsId}`)
  }

  addOrder(data: Order): Observable<Order> {
    return this.http.put<Order>(`${this.api_root_url}/order`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  patchOrder(data: Order): Observable<Order> {
    return this.http.patch<Order>(`${this.api_root_url}/order/${data.omsId}`, data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  deleteOrder(omsId: string): void {
    this.http.delete(`${this.api_root_url}/order/${omsId}`)
  }
}