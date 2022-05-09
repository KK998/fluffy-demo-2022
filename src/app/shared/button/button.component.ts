import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

type ButtonStyle = "dark" | "light"
type ButtonType = "submit" | "normal"
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonType = "normal"
  @Input() style: ButtonStyle = "dark"

  constructor() { }

  ngOnInit(): void {
  }

}
