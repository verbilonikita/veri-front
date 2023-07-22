import { Injectable, OnDestroy } from '@angular/core';
import { Subject, delay, lastValueFrom, takeUntil } from 'rxjs';
import {
  IElectricityRatesRespones,
  IPlan,
} from '../ElectricityPageDTO/ElectricityRates.types';
import { API } from 'src/app/const/router.const';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ElectricityRatesService implements OnDestroy {
  public plans: IPlan[] = [];
  private $unsubscribe = new Subject<void>();
  public loading = false;

  constructor(private http: HttpClient) {}

  toggleLoading() {
    this.loading = !this.loading;
  }

  async getRates(kwhValue: string) {
    try {
      this.toggleLoading();
      const body = { kwh: +kwhValue };
      const { data } = await lastValueFrom(
        this.http
          .post<IElectricityRatesRespones>(API.URL, body)
          .pipe(delay(1000), takeUntil(this.$unsubscribe))
      );
      this.plans = data;
    } catch (err) {
      throw new Error((err as any).message);
    } finally {
      this.toggleLoading();
    }
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
}
