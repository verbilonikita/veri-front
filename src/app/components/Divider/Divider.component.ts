import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './Divider.component.html',
  styleUrls: ['./Divider.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {
  @Input() isLast: boolean = false;
}
