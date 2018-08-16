import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule
} from '@angular/material';
import { HighlightModule } from 'ngx-highlightjs';
import { MenuComponent } from './menu/menu.component';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    NavigationRoutingModule,
    HighlightModule.forRoot(),
    FlexLayoutModule
  ],
  declarations: [
    NavigationComponent,
    TemplateComponent,
    MenuComponent
  ]
})
export class NavigationModule { }
