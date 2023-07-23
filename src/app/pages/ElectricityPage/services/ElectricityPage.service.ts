import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  catchError,
  delay,
  map,
  of,
  takeUntil,
} from 'rxjs';
import {
  IElectricityRatesRespones,
  IPlan,
} from '../dto/ElectricityRates.types';
import { API } from 'src/app/const/router.const';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ElectricityRatesService implements OnDestroy {
  private $unsubscribe = new Subject<void>();
  constructor(private http: HttpClient) {}
  public loading$ = new BehaviorSubject(false);
  public error$ = new BehaviorSubject('');
  public plans$ = new BehaviorSubject<IPlan[] | []>([]);

  fetchData(kwhValue: string) {
    this.loading$.next(true);
    const body = { kwh: +kwhValue };
    this.http
      .post<IElectricityRatesRespones>(API.URL, body)
      .pipe(
        map((res) => res.data),
        catchError((err) => {
          this.error$.next(err.message);
          return of([]); // Return an observable with a default value or null to continue the observable chain
        }),
        delay(1000),
        takeUntil(this.$unsubscribe)
      )
      .subscribe({
        next: (res) => this.plans$.next(res),
        complete: () => this.loading$.next(false),
      });
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
}
