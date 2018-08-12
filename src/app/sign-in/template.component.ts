import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({
          transform: 'scale3d(0.3, 0.3, 0.3)',
          opacity: 0.5
        }),
        animate(250, style({
          transform: 'scale3d(1, 1, 1)',
          opacity: 1
        }))
      ]),
      transition('* => void', [
        style({
          opacity: 1
        }),
        animate(200, style({
          opacity: 0
        }))
      ]),
    ])
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

  signIn() {
    this.changeRoute('/');
  }

}
