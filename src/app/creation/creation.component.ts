import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { creationOperators } from './creation.constants';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss'],
})
export class CreationComponent implements OnInit, OnChanges {
  @Input() operator!: string;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['operator']) {
      const callback = creationOperators.get(this.operator);
      if (callback) {
        callback();
      }
    }
  }

  ngOnInit(): void {}
}
