import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationRoutingModule
  ],
  declarations: [
    NavigationComponent,
    TemplateComponent
  ]
})
export class NavigationModule { }
