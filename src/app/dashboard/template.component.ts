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

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnDestroy, AfterViewInit {

  sidenav = {
    opened: true,
    mode: 'side',
    fixedTopGap: 64,
  };
  mode = 'side';
  handset = false;
  tablet = false;
  web = false;

  sidebarType = 'simple';

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

  changeSidebarType(type, sidenav) {
    sidenav.close();
    setTimeout(() => {
      this.sidebarType = type;
      setTimeout(() => {
        sidenav.open();
      }, 200);
    }, 500);
  }

}
