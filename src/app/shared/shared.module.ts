import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class SharedModule { }
