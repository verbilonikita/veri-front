import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ElectricityRatesService } from './services/ElectricityRates.service';

@Component({
  selector: 'electricity-rates',
  templateUrl: './ElectricityPage.component.html',
  styleUrls: ['./ElectricityPage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElectricityPageComponent implements OnInit, OnDestroy {
  constructor(private ers: ElectricityRatesService) {}

  ngOnInit(): void {
    this.ers.init();
  }

  ngOnDestroy(): void {
    this.ers.destroy();
  }
}
