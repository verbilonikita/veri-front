import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Subscription,
  catchError,
  delay,
  map,
  of,
} from 'rxjs';
import {
  IElectricityRatesRespones,
  IPlan,
} from '../dto/ElectricityRates.types';
import { API } from 'src/app/const/router.const';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ElectricityRatesService {
  public loading$ = new BehaviorSubject(false);
  public error$ = new BehaviorSubject('');
  public plans$ = new BehaviorSubject<IPlan[] | []>([]);
  private subscription$?: Subscription;

  constructor(private http: HttpClient) {}

  init() {
    this.plans$ = new BehaviorSubject<IPlan[] | []>([]);
  }

  fetchData(kwhValue: string) {
    this.loading$.next(true);
    const body = { kwh: +kwhValue };
    this.subscription$ = this.http
      .post<IElectricityRatesRespones>(API.URL, body)
      .pipe(
        map((res) => res.data),
        catchError((err) => {
          this.error$.next(err.message);
          return of([]);
        }),
        delay(1000)
      )
      .subscribe({
        next: (res) => this.plans$.next(res),
        complete: () => this.loading$.next(false),
      });
  }

  destroy(): void {
    this.subscription$?.unsubscribe();
    this.plans$.unsubscribe();
  }
}
