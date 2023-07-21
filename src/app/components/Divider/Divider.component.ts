import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './Divider.component.html',
  styleUrls: ['./Divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {
  @Input() isLast: boolean = false;
}
