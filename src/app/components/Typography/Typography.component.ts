import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TypographySizesEnum } from 'src/app/const/common.const';

@Component({
  selector: 'app-typography',
  templateUrl: './Typography.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./Typography.component.scss'],
})
export class TypographyComponent {
  @Input() title!: string | null;
  @Input() size: keyof typeof TypographySizesEnum = TypographySizesEnum.md;
}
