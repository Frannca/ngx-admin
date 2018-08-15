import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule
} from '@angular/material';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { TemplateComponent } from './template.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    NavigationRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    NavigationComponent,
    TemplateComponent,
    MenuComponent
  ]
})
export class NavigationModule { }
