import { Injectable } from '@angular/core';
import { delay, lastValueFrom } from 'rxjs';
import {
  IElectricityRatesRespones,
  IElectricityResponseError,
  IPlan,
} from './ElectricityRates.types';
import { API } from 'src/app/const/router.const';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ElectricityRatesService {
  plans: IPlan[] = [];
  error?: string;

  constructor(private http: HttpClient) {}

  async getRates(kwhValue: string) {
    try {
      const body = { kwh: +kwhValue };
      const { data } = await lastValueFrom(
        this.http
          .post<IElectricityRatesRespones>(API.URL, body)
          .pipe(delay(1000))
      );
      this.plans = data;
      this.error = '';
    } catch (err) {
      this.error = (err as IElectricityResponseError).message;
    }
  }
}
