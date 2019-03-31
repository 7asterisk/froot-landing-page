import { trigger, animate, transition, style, query, animateChild, group, state, keyframes } from '@angular/animations';

export const fadeAnimation =

  trigger('fadeAnimation', [

    transition('* => *', [

      query(':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true }
      ),

      query(':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s', style({ opacity: 1 }))
        ],
        { optional: true }
      )

    ])

  ]);
  export const slideInAnimation =
  trigger('routeAnimations', [
    transition('somthing <=> somthing', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%', opacity: 0 }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Somrthig', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);


  export const inEffect = trigger('inEffect', [
    state('void', style({
       opacity: 0,
    })),
    transition('void =>*', animate('1000ms ease-in', keyframes([
      style({opacity: 0, transform: 'translateX(-50%)', offset: 0}),
      style({opacity: 1, transform: 'translateX(-35px)',  offset: 0}),
      style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
    ]))),
]);

