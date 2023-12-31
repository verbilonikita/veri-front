import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './Button.component.html',
  styleUrls: ['./Button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() type: string = 'submit';
  @Input() title: string = 'Submit';
}
