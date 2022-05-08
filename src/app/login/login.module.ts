import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent
  ],
  exports: [
    FormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class LoginModule { }
