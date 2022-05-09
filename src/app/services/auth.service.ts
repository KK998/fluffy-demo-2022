import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { ClientToken } from './auth';

import { CanActivate, Router } from '@angular/router';

const LOCALSTORAGE_TTL = 1000000;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private api_url = "http://localhost:5000/auth"
  private clientToken: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  canActivate(): boolean {
    if (this.getClientToken() === undefined) {
      this.router.navigate(['']);
    }
    return this.getClientToken() !== undefined;
  }

  public getClientToken(): string {
    if (this.getClientTokenFromLocalStorage()) {
      return this.getClientTokenFromLocalStorage();
    }
    if (!this.clientToken) this.setClientToken();
    if (this.clientToken === undefined) {
      this.router.navigate(['/'])
      return "";
    }
    return this.clientToken;
  }

  public setClientToken(email?: string, password?: string) {
    if (!isDevMode() && email && password) {
      this.fetchClientTokenFromApi(email, password);
      return
    }
    this.mockClientToken();
  }

  // If password encryption is needed (sha256, base64 etc...)
  protected passwordEncrypt(password: string): string {
    return password;
  }

  protected fetchClientTokenFromApi(password: string, email: string) {
    if (!password || !email) throw new Error("Missing error or password");
    password = this.passwordEncrypt(password);
    this.http.post<ClientToken>(this.api_url, JSON.stringify({ email, password })).subscribe(res => {
      this.clientToken = res.clientToken;
      this.setClientTokenToLocalStorage();
    })
  }

  protected mockClientToken() {
    this.http.get<ClientToken[]>(this.api_url).subscribe(res => {
      this.clientToken = res[0].clientToken
      this.setClientTokenToLocalStorage();
    });
  }

  protected getClientTokenFromLocalStorage() {
    const clientTokenJSON = localStorage.getItem("clientToken")
    if (clientTokenJSON) {
      const obj = JSON.parse(clientTokenJSON);
      if (obj.timestamp < new Date().getTime() + LOCALSTORAGE_TTL) {
        return obj.clientToken;
      }
    }
    return "";
  }

  protected setClientTokenToLocalStorage() {
    if (this.clientToken) {
      localStorage.setItem("clientToken", JSON.stringify({
        clientToken: this.clientToken,
        timestamp: new Date().getTime()
      }))
    }
  }
}