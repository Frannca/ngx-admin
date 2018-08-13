import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';

export let slideInOutDownSmall = [
  trigger('slideInDownSmall', [
    transition('void => *', [
      style({
        transform: 'translate3d(0, -100%, 0)',
        opacity: 0.5
      }),
      animate(100, style({
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      }))
    ]),
  ]),
  trigger('slideOutDownSmall', [
    transition('* => void', [
      style({
        opacity: 1
      }),
      animate(75, style({
        opacity: 0
      }))
    ]),
  ])
];

export let slideInOutDownMedium = [
  trigger('slideInDownMedium', [
    transition('void => *', [
      style({
        transform: 'translate3d(0, -100%, 0)',
        opacity: 0.5
      }),
      animate(250, style({
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      }))
    ]),
  ]),
  trigger('slideOutDownMedium', [
    transition('* => void', [
      style({
        opacity: 1
      }),
      animate(200, style({
        opacity: 0
      }))
    ]),
  ])
];

export let slideInOutDownLarge = [
  trigger('slideInDownLarge', [
    transition('void => *', [
      style({
        transform: 'translate3d(0, -100%, 0)',
        opacity: 0.5
      }),
      animate(300, style({
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      }))
    ]),
  ]),
  trigger('slideOutDownLarge', [
    transition('* => void', [
      style({
        opacity: 1
      }),
      animate(250, style({
        opacity: 0
      }))
    ]),
  ])
];
