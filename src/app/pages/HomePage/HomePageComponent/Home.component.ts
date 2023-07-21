import { Component } from '@angular/core';
import { BtnTitlesEnum } from 'src/app/const/common.const';
import { HomePageEnum } from './Home.const';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss'],
})
export class HomeComponent {
  btnTitle = BtnTitlesEnum.calculate;
  title = HomePageEnum.title;
}
