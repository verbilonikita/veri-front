import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  ElectricityRatesEnum,
  ElectricityRatesTitlesEnum,
} from '../../dto/ElectricityRates.const';
import { ElectricityRatesService } from '../../services/ElectricityPage.service';
import { Observable, Subject, combineLatest, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-ElectricityRates',
  templateUrl: './ElectricityRates.component.html',
  styleUrls: ['./ElectricityRates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElectricityRatesComponent implements OnInit {
  formTitle = ElectricityRatesEnum.formTitle;
  listTitle: ElectricityRatesTitlesEnum | null = null;
  title$!: Observable<ElectricityRatesTitlesEnum>;
  private destroy$ = new Subject<void>();

  constructor(public electricityRatesService: ElectricityRatesService) {}

  ngOnInit(): void {
    this.getTitle();
  }

  private getTitle() {
    this.title$ = combineLatest([
      this.electricityRatesService.error$,
      this.electricityRatesService.plans$,
    ]).pipe(
      map(([err, plans]) => {
        if (err) {
          return ElectricityRatesTitlesEnum.Error;
        } else if (plans.length > 0) {
          return ElectricityRatesTitlesEnum.PickedPlans;
        }
        return ElectricityRatesTitlesEnum.ChooseRates;
      }),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
