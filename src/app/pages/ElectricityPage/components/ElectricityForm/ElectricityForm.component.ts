import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ElectricityRatesService } from '../../ElectricityPageService/ElectricityRates.service';
import { ElectricityRatesEnum } from '../../ElectricityPageDTO/ElectricityRates.const';

@Component({
  selector: 'app-ElectricityForm',
  templateUrl: './ElectricityForm.component.html',
  styleUrls: ['./ElectricityForm.component.scss'],
})
export class ElectricityFormComponent implements OnInit {
  form!: FormGroup;
  error: string = '';
  formTitle = ElectricityRatesEnum.formTitle;

  constructor(
    private fb: FormBuilder,
    public electricityRatesService: ElectricityRatesService,
    private changeDetector: ChangeDetectorRef
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

  async handleSubmit() {
    if (this.form.valid) {
      try {
        this.error = '';
        const kwhValue = this.form.value.textkwh;
        await this.electricityRatesService.getRates(kwhValue);
      } catch (err: any) {
        this.error = err.message;
      } finally {
        this.changeDetector.markForCheck();
      }
    }
  }
}
