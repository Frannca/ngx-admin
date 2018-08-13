import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';

export let fadeInOutSmall = [
  trigger('fadeInSmall', [
    transition('void => *', [
      style({
        opacity: 0.5
      }),
      animate(100, style({
        opacity: 1
      }))
    ]),
  ]),
  trigger('fadeOutSmall', [
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

export let fadeInOutMedium = [
  trigger('fadeInMedium', [
    transition('void => *', [
      style({
        opacity: 0.5
      }),
      animate(250, style({
        opacity: 1
      }))
    ]),
  ]),
  trigger('fadeOutMedium', [
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

export let fadeInOutLarge = [
  trigger('fadeInLarge', [
    transition('void => *', [
      style({
        opacity: 0.5
      }),
      animate(300, style({
        opacity: 1
      }))
    ]),
  ]),
  trigger('fadeInLarge', [
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
