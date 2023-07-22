import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './Link.component.html',
  styleUrls: ['./Link.component.scss'],
  standalone: true,
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() title!: string;
  @Input() link!: string;
}
