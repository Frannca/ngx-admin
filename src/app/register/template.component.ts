import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut } from '../_animations/fade-in-out';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class TemplateComponent {

  smallDevice = false;
  loaded = true;

  constructor(
    private router: Router,
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver.observe(Breakpoints.XSmall).subscribe(result => {
      if (result.matches) {
        this.smallDevice = true;
      } else {
        this.smallDevice = false;
      }
    });
  }

  changeRoute(route) {
    this.loaded = false;
    setTimeout(() => {
      this.router.navigate([route]);
    }, 200);
  }

}
