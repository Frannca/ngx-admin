import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatRippleModule
} from '@angular/material';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatExpansionModule,
    MatGridListModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    TemplateComponent
  ]
})
export class DashboardModule { }
