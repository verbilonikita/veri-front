import { Component, Input, OnInit } from '@angular/core';
import { TypographySizesEnum } from 'src/app/const/common.const';

@Component({
  selector: 'app-typography',
  templateUrl: './Typography.component.html',
  styleUrls: ['./Typography.component.scss'],
})
export class TypographyComponent {
  @Input() title?: string;
  @Input() size: keyof typeof TypographySizesEnum = TypographySizesEnum.sm;
}
