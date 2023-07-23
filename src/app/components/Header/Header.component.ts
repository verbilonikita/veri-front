import { ChangeDetectionStrategy, Component } from '@angular/core';
import { links } from 'src/app/const/router.const';
import { HeaderBtnEnum, HeaderTitlesEnum } from './dto/Header.const';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  linkCalculator: string = links.calculator;

  btns = HeaderBtnEnum;

  linkHome: string = links.home;
  title = HeaderTitlesEnum.title;
}
