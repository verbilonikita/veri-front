import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnTitlesEnum } from 'src/app/const/common.const';
import { links } from 'src/app/const/router.const';
import { HeaderTitlesEnum } from './Header.const';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  linkCalculator: string = links.calculator;
  linkCalculatorTitle = BtnTitlesEnum.calculate;

  linkHome: string = links.home;
  linkHomeTitle: string = BtnTitlesEnum.home;
  title = HeaderTitlesEnum.title;
}
