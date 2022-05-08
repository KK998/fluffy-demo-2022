import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'oms';
  loggedIn: boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.getClientToken()) {
      this.setLoggedIn(true)
    }
  }

  public setLoggedIn(state: boolean) {
    this.loggedIn = state
  }
}
