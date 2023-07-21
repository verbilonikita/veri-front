import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './Loading.component.html',
  styleUrls: ['./Loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent implements OnInit {
  @Input() loading?: boolean;
  constructor() {}

  ngOnInit() {}
}
