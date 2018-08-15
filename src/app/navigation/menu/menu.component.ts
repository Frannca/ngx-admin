import { Component, OnInit } from '@angular/core';
import { fadeInOutSmall } from '../../_animations/fade-in-out';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    fadeInOutSmall
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
