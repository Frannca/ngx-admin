import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule
} from '@angular/material';

import { SignInRoutingModule } from './sign-in-routing.module';
import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
