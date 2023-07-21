import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const openClose = trigger('openClose', [
  state(
    'open',
    style({
      height: '*',
      opacity: 1,
    })
  ),
  state(
    'closed',
    style({
      height: '0',
      opacity: 0,
    })
  ),
  transition('closed <=> open', [animate('500ms ease-in-out')]),
]);

export { openClose };
