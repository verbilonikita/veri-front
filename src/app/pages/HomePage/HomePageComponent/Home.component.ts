import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomePageEnum } from './Home.const';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  title = HomePageEnum.title;
}
