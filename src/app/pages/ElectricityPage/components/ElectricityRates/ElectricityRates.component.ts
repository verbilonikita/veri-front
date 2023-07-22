import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ElectricityRatesEnum,
  ElectricityRatesTitlesEnum,
} from '../../ElectricityPageDTO/ElectricityRates.const';
import { ElectricityRatesService } from '../../ElectricityPageService/ElectricityRates.service';

@Component({
  selector: 'app-ElectricityRates',
  templateUrl: './ElectricityRates.component.html',
  styleUrls: ['./ElectricityRates.component.scss'],
})
export class ElectricityRatesComponent {
  error?: string;
  formTitle = ElectricityRatesEnum.formTitle;
  listTitle: ElectricityRatesTitlesEnum | null = null;

  constructor(public electricityRatesService: ElectricityRatesService) {}

  showListTitle() {
    return !this.electricityRatesService.loading || this.error;
  }

  showList() {
    return (
      this.electricityRatesService.plans.length > 0 &&
      !this.electricityRatesService.loading
    );
  }

  getMessageType(): string {
    if (this.error) {
      return ElectricityRatesTitlesEnum.Error;
    } else if (this.electricityRatesService.plans.length > 0) {
      return ElectricityRatesTitlesEnum.PickedPlans;
    }
    return ElectricityRatesTitlesEnum.ChooseRates;
  }
}
