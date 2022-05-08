import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'oms';
  loggedIn: boolean = false

  public setLoggedIn(state: boolean) {
    this.loggedIn = state
  }
}
