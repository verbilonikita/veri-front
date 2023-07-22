import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ElectricityRatesService } from '../../../ElectricityPageService/ElectricityRates.service';
import { IPlan } from '../../../ElectricityPageDTO/ElectricityRates.types';

@Component({
  selector: 'app-planslist',
  templateUrl: './PlansList.component.html',
  styleUrls: ['./PlansList.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlansListComponent {
  @Input() plans?: IPlan[];
  constructor(public electricityRatesService: ElectricityRatesService) {}
}
