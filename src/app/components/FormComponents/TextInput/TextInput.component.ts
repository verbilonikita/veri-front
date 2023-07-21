import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './TextInput.component.html',
  styleUrls: ['./TextInput.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor {
  value!: string;
  @Input() pattern: string = '';

  onChange: (event: Event) => void = (_) => {};
  onTouched: () => void = () => {};

  writeValue(value: string) {
    this.value = value || '';
  }

  registerOnChange(fn: any) {
    this.onChange = (event: Event) => {
      const typedValue = (event.target as HTMLInputElement).value;
      const pattern = new RegExp(this.pattern);
      if (pattern.test(typedValue)) {
        (event.target as HTMLInputElement).value = typedValue;
        fn(typedValue);
      } else {
        const updatedValue = this.value.slice(0, this.value.length - 1);
        (event.target as HTMLInputElement).value = updatedValue;
        fn(updatedValue);
      }
    };
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
