import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ElectricityRatesEnum,
  ElectricityRatesTitlesEnum,
} from '../../dto/ElectricityRates.const';
import { ElectricityRatesService } from '../../services/ElectricityRates.service';
import { Observable, Subject, combineLatest, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-ElectricityRates',
  templateUrl: './ElectricityRates.component.html',
  styleUrls: ['./ElectricityRates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElectricityRatesComponent implements OnInit, OnDestroy {
  formTitle = ElectricityRatesEnum.formTitle;
  listTitle: ElectricityRatesTitlesEnum | null = null;
  title$!: Observable<ElectricityRatesTitlesEnum>;
  private destroy$!: Subject<void>;

  constructor(public electricityRatesService: ElectricityRatesService) {}

  ngOnInit(): void {
    this.destroy$ = new Subject();
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
