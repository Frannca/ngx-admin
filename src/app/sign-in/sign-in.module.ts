import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatInputModule
} from '@angular/material';

import { SignInRoutingModule } from './sign-in-routing.module';
import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    SignInRoutingModule
  ],
  declarations: [
    TemplateComponent
  ]
})
export class SignInModule { }
