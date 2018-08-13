import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';
import {
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';
import { MDCTopAppBar } from '@material/top-app-bar/index';
import { fadeInOutLarge } from '../_animations/fade-in-out';
import { slideInOutDownSmall } from '../_animations/slide-in-out-down';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  animations: [
    fadeInOutLarge,
    slideInOutDownSmall
  ]
})
export class TemplateComponent implements OnDestroy, AfterViewInit {

  sidenav = {
    opened: false,
    mode: 'side',
    fixedTopGap: 64,
  };
  mode = 'side';
  handset = false;
  tablet = false;
  web = false;

  sidebarType = 'main';

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      if (result.matches) {
        setTimeout(() => {
          this.handset = true;
          this.sidenav.opened = false;
          this.sidenav.mode = 'over';
          this.sidenav.fixedTopGap = 56;
        });
      }
    });

    breakpointObserver.observe(Breakpoints.Tablet).subscribe(result => {
      if (result.matches) {
        setTimeout(() => {
          this.tablet = true;
          this.sidenav.opened = false;
          this.sidenav.mode = 'over';
          this.sidenav.fixedTopGap = 64;
        });
      }
    });

    breakpointObserver.observe(Breakpoints.Web).subscribe(result => {
      if (result.matches) {
        setTimeout(() => {
          this.web = true;
          this.sidenav.opened = true;
          this.sidenav.mode = 'side';
          this.sidenav.fixedTopGap = 64;
        });
      }
    });
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit() {
    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    const topAppBar = new MDCTopAppBar(topAppBarElement);
  }

}
