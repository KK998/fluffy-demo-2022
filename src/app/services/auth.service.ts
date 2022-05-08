import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api_url = "http://localhost:5000/auth"
  protected clientToken: string | undefined

  constructor() { }


  public getClientToken(): string | undefined {
    return this.clientToken
  }

  public setClientToken(val: string | undefined) {
    this.clientToken = val;

    return this;
  }
}
