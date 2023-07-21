import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPlan } from '../../ElectricityRates.types';
import { ElectricityRatesService } from '../../ElectricityRates.service';

@Component({
  selector: 'app-planslist',
  templateUrl: './PlansList.component.html',
  styleUrls: ['./PlansList.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlansListComponent {
  plans: IPlan[];
  constructor(private electricityRatesService: ElectricityRatesService) {
    this.plans = this.electricityRatesService.plans;
  }
}
