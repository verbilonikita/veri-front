import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BtnTitlesEnum } from 'src/app/const/common.const';
import {
  ElectricityRatesEnum,
  ElectricityRatesTitlesEnum,
} from '../ElectricityRates.const';
import { ElectricityRatesService } from '../ElectricityRates.service';

@Component({
  selector: 'electricity-rates',
  templateUrl: './ElectricityRates.component.html',
  styleUrls: ['./ElectricityRates.component.scss'],
})
export class ElectricityRatesComponent implements OnInit {
  loading: boolean = false;
  btnTitle = BtnTitlesEnum.calculate;
  form!: FormGroup;
  error?: string;
  formTitle = ElectricityRatesEnum.formTitle;
  listTitle: ElectricityRatesTitlesEnum | null = null;

  constructor(
    private fb: FormBuilder,
    public electricityRatesService: ElectricityRatesService
  ) {}

  ngOnInit() {
    this.initiateForm();
  }

  showListTitle() {
    return !this.loading || this.electricityRatesService.error;
  }

  showList() {
    return this.electricityRatesService.plans.length > 0 && !this.loading;
  }

  getMessageType(): string {
    if (this.electricityRatesService.plans.length > 0) {
      return ElectricityRatesTitlesEnum.PickedPlans;
    } else if (this.error) {
      return ElectricityRatesTitlesEnum.Error;
    }
    return ElectricityRatesTitlesEnum.ChooseRates;
  }

  toggleLoading() {
    this.loading = !this.loading;
  }

  async handleSubmit() {
    if (this.form.valid) {
      this.toggleLoading();
      const kwhValue = this.form.value.textkwh;
      await this.electricityRatesService.getRates(kwhValue);
      this.toggleLoading();
    }
  }

  private initiateForm() {
    this.form = this.fb.group({
      textkwh: new FormControl('', [Validators.required]),
    });
  }
}
