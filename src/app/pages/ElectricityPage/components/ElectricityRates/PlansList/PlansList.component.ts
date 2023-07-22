import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPlan } from '../../../dto/ElectricityRates.types';

@Component({
  selector: 'app-planslist',
  templateUrl: './PlansList.component.html',
  styleUrls: ['./PlansList.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlansListComponent {
  @Input() plans!: IPlan[];
}
