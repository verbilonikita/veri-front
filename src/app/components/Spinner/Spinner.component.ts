import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-spinner',
  templateUrl: './Spinner.component.html',
  styleUrls: ['./Spinner.component.scss'],
  standalone: true,
  imports: [MatIconModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input() loading!: boolean | null;
}
