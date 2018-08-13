import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';

export let zoomInSmall = [
  trigger('zoomInSmall', [
    transition('void => *', [
      style({
        transform: 'scale3d(0.3, 0.3, 0.3)',
      }),
      animate(100, style({
        transform: 'scale3d(1, 1, 1)',
      }))
    ]),
  ])
];

export let zoomOutSmall = [
  trigger('zoomOutSmall', [
    transition('* => void', [
      style({
        transform: 'scale3d(1, 1, 1)',
      }),
      animate(75, style({
        transform: 'scale3d(0.3, 0.3, 0.3)',
      }))
    ]),
  ])
];

export let zoomInMedium = [
  trigger('zoomInMedium', [
    transition('void => *', [
      style({
        transform: 'scale3d(0.3, 0.3, 0.3)',
      }),
      animate(250, style({
        transform: 'scale3d(1, 1, 1)',
      }))
    ]),
  ])
];

export let zoomOutMedium = [
  trigger('zoomOutMedium', [
    transition('* => void', [
      style({
        transform: 'scale3d(1, 1, 1)',
      }),
      animate(200, style({
        transform: 'scale3d(0.3, 0.3, 0.3)',
      }))
    ]),
  ])
];

export let zoomInLarge = [
  trigger('zoomInLarge', [
    transition('void => *', [
      style({
        transform: 'scale3d(0.3, 0.3, 0.3)',
      }),
      animate(300, style({
        transform: 'scale3d(1, 1, 1)',
      }))
    ]),
  ])
];

export let zoomOutLarge = [
  trigger('zoomOutLarge', [
    transition('* => void', [
      style({
        transform: 'scale3d(1, 1, 1)',
      }),
      animate(250, style({
        transform: 'scale3d(0.3, 0.3, 0.3)',
      }))
    ]),
  ])
];
