import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'electricity-rates',
  templateUrl: './ElectricityPage.component.html',
  styleUrls: ['./ElectricityPage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElectricityPageComponent {}
