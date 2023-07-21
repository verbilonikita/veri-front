import { NgModule } from '@angular/core';
import { TypographyComponent } from './Typography.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TypographyComponent],
  imports: [CommonModule],
  exports: [TypographyComponent],
})
export class TypographyModule {}
