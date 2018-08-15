import {
  Component,
  OnInit
} from '@angular/core';
import {
  fadeInOutMedium,
  fadeInOutSmall
} from '../_animations/fade-in-out';
import { zoomInOutMedium } from '../_animations/zoom-in-out';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    fadeInOutMedium,
    fadeInOutSmall,
    zoomInOutMedium
  ]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
