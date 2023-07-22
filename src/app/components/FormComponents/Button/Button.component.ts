import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './Button.component.html',
  styleUrls: ['./Button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
}
