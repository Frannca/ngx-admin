import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  smallDevice = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(Breakpoints.XSmall).subscribe(result => {
      if (result.matches) {
        this.smallDevice = true;
      } else {
        this.smallDevice = false;
      }
    });
  }

  ngOnInit() {
  }

}
