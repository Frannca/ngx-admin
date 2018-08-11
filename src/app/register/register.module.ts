import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatInputModule
} from '@angular/material';

import { RegisterRoutingModule } from './register-routing.module';
import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    RegisterRoutingModule
  ],
  declarations: [
    TemplateComponent
  ]
})
export class RegisterModule { }
