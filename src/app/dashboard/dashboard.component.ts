import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';
import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { fadeInOutLarge } from '../_animations/fade-in-out';
import { TemplateComponent } from './template.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    fadeInOutLarge
  ]
})
export class DashboardComponent implements OnInit {

  @ViewChild('snav') sidenav: MatSidenav;
  @ViewChild(TemplateComponent) template: TemplateComponent;

  gridListCols = 4;
  handset = false;
  tablet = false;
  web = false;

  sidebarType = 'simple';

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      if (result.matches) {
        setTimeout(() => {
          this.handset = true;

          this.gridListCols = 1;
        });
      }
    });

    breakpointObserver.observe(Breakpoints.Tablet).subscribe(result => {
      if (result.matches) {
        setTimeout(() => {
          this.tablet = true;

          this.gridListCols = 2;
        });
      }
    });

    breakpointObserver.observe(Breakpoints.Web).subscribe(result => {
      if (result.matches) {
        setTimeout(() => {
          this.web = true;

          this.gridListCols = 4;
        });
      }
    });
  }

  ngOnInit() {
  }

  /**
   * TODO: create service to control de sidenav
   *
   * @param type
   */
  changeSidebarType(type) {
    if (this.sidebarType !== type) {
      this.sidenav.close();
      setTimeout(() => {
        this.sidebarType = type;
        setTimeout(() => {
          this.sidenav.open();
        }, 200);
      }, 500);
    }
  }

}
