import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Order } from './orders';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  //private api_root_url = "http://172.104.154.9:11111/api/v2/orders"
  private api_root_url = "http://localhost:5000/orders"
  constructor(private http: HttpClient, private auth: AuthService) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.api_root_url}`, {
      headers: {
        "clientToken": this.auth.getClientToken()
      }
    })
  }

  getOrder(omsId: string): Observable<Order> {
    return this.http.get<Order>(`${this.api_root_url}/${omsId}`)
  }

  addOrder(data: Order): Observable<Order> {
    return this.http.put<Order>(`${this.api_root_url}`, JSON.stringify(data), {
      headers: {
        "clientToken": this.auth.getClientToken(),
        "Content-Type": "application/json"
      }
    })
  }

  patchOrder(data: Order): Observable<Order> {
    return this.http.patch<Order>(`${this.api_root_url}/${data.omsId}`, data, {
      headers: {
        "clientToken": this.auth.getClientToken(),
        "Content-Type": "application/json"
      }
    })
  }

  deleteOrder(omsId: string): void {
    this.http.delete(`${this.api_root_url}/${omsId}`, {
      headers: {
        "clientToken": this.auth.getClientToken(),
      }
    })
  }
}