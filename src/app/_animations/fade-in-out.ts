import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';

export let fadeInOut = [
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
];
