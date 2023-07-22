import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ElectricityRatesService } from '../../services/ElectricityPage.service';
import { ElectricityRatesEnum } from '../../dto/ElectricityRates.const';

@Component({
  selector: 'app-ElectricityForm',
  templateUrl: './ElectricityForm.component.html',
  styleUrls: ['./ElectricityForm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElectricityFormComponent implements OnInit {
  form!: FormGroup;
  formTitle = ElectricityRatesEnum.formTitle;

  constructor(
    private fb: FormBuilder,
    public electricityRatesService: ElectricityRatesService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      textkwh: new FormControl('', [Validators.required]),
    });
  }
  inputInvalid(controlName: string) {
    const item = this.form.controls[controlName];
    return !!item.errors && item.dirty;
  }

  handleSubmit() {
    if (this.form.valid) {
      const kwhValue = this.form.value.textkwh;
      this.electricityRatesService.fetchData(kwhValue);
    }
  }
}
