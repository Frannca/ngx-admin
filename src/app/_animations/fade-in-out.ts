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
        opacity: 0.5
      }),
      animate(250, style({
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
