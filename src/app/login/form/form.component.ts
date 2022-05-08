import { Component, OnInit } from '@angular/core';
import { FormControl, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


type FieldErrors = ValidationErrors | null;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  errors: FieldErrors = null
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onClickSubmit(obj: any) {
    const control = new FormControl(obj.email, Validators.email)
    this.errors = control.errors
    if (obj.email && obj.password) {
      this.auth.setClientToken(obj.email, obj.password);
    }
  }

}
