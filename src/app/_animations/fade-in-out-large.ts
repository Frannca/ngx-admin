import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';

export let fadeInOutLarge = [
  trigger('fadeInOutLarge', [
    transition('void => *', [
      style({
        opacity: 0
      }),
      animate(350, style({
        opacity: 1
      }))
    ]),
    transition('* => void', [
      style({
        opacity: 1
      }),
      animate(300, style({
        opacity: 0
      }))
    ]),
  ])
];
