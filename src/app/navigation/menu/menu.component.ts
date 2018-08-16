import { Component, OnInit } from '@angular/core';
import {
  fadeInOutMedium,
  fadeInOutSmall
} from '../../_animations/fade-in-out';
import { zoomInOutMedium } from '../../_animations/zoom-in-out';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    fadeInOutMedium,
    fadeInOutSmall,
    zoomInOutMedium
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
