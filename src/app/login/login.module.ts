import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatInputModule
} from '@angular/material';

import { LoginRoutingModule } from './login-routing.module';
import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    LoginRoutingModule
  ],
  declarations: [
    TemplateComponent
  ]
})
export class LoginModule { }
