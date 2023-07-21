import { NgModule } from '@angular/core';
import { ButtonComponent } from './Button/Button.component';
import { TextInputComponent } from './TextInput/TextInput.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ButtonComponent, TextInputComponent],
  imports: [FormsModule, CommonModule],
  exports: [ButtonComponent, TextInputComponent],
})
export class FormComponentsModule {}
