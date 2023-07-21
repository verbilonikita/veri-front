import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPlan } from '../../../ElectricityRates.types';
import { openClose } from 'src/app/const/animations';

@Component({
  selector: 'app-plan',
  templateUrl: './Plan.component.html',
  styleUrls: ['./Plan.component.scss'],
  animations: [openClose],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanComponent {
  @Input() plan?: IPlan;
  @Input() bestOption: boolean = false;

  isOpen: boolean = false;

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
