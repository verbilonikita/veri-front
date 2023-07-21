import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './Button.component.html',
  styleUrls: ['./Button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() title?: String;
  @Input() loading: boolean = false;
}
