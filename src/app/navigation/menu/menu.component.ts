import {
  AfterContentInit,
  Component
} from '@angular/core';
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
export class MenuComponent implements AfterContentInit {

  loaded = false;

  menuSimpleHtml = `
  <button mat-button [matMenuTriggerFor]="menu">Basic Menu</button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item>Item 1</button>
    <button mat-menu-item>Item 2</button>
  </mat-menu>
  `;

  menuSimpleTypeScript = `
  import { MatMenuModule } from '@angular/material';
 
  @NgModule({
    imports: [
      MatMenuModule,
    ],
  })
  export class SomeModule { }
  `;

  menuSimpleCss = `
  /** No CSS for this example */
  `;

  menuIconHtml = `
  <button mat-button [matMenuTriggerFor]="menuIcon">Icon Menu</button>
  <mat-menu #menuIcon="matMenu">
    <button mat-menu-item>
      <mat-icon>favorite</mat-icon>
      <span>Love</span>
    </button>
    <button mat-menu-item>
      <mat-icon>thumb_up</mat-icon>
      <span>Like</span>
    </button>
    <button mat-menu-item>
      <mat-icon>thumb_down</mat-icon>
      <span>Dislike</span>
    </button>
  </mat-menu>
  `;

  menuIconTypeScript = `
  import { MatMenuModule } from '@angular/material';
  
  @NgModule({
    imports: [
      MatMenuModule,
    ],
  })
  export class SomeModule { }
  `;

  menuIconCss = `
  /** No CSS for this example */
  `;

  menuCustomPositionHtml = `
  <button mat-icon-button [matMenuTriggerFor]="menuBefore">
    <mat-icon>keyboard_arrow_left</mat-icon>
  </button>
  <mat-menu #menuBefore="matMenu" xPosition="before">
    <button mat-menu-item>Item 1</button>
    <button mat-menu-item>Item 2</button>
  </mat-menu>

  <button mat-icon-button [matMenuTriggerFor]="menuAfter">
    <mat-icon>keyboard_arrow_right</mat-icon>
  </button>
  <mat-menu #menuAfter="matMenu" xPosition="after">
    <button mat-menu-item>Item 1</button>
    <button mat-menu-item>Item 2</button>
  </mat-menu>

  <button mat-icon-button [matMenuTriggerFor]="menuAbove">
    <mat-icon>keyboard_arrow_up</mat-icon>
  </button>
  <mat-menu #menuAbove="matMenu" yPosition="above">
    <button mat-menu-item>Item 1</button>
    <button mat-menu-item>Item 2</button>
  </mat-menu>

  <button mat-icon-button [matMenuTriggerFor]="menuBelow">
    <mat-icon>keyboard_arrow_down</mat-icon>
  </button>
  <mat-menu #menuBelow="matMenu" yPosition="below">
    <button mat-menu-item>Item 1</button>
    <button mat-menu-item>Item 2</button>
  </mat-menu>
  `;

  menuCustomPositionTypeScript = `
  import { MatMenuModule } from '@angular/material';
  
  @NgModule({
    imports: [
      MatMenuModule,
    ],
  })
  export class SomeModule { }
  `;

  menuCustomPositionCss = `
  /** No CSS for this example */
  `;

  constructor() { }

  ngAfterContentInit() {
    this.loaded = true;
  }

}
