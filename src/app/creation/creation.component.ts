import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { creationOperators } from './creation.constants';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss'],
})
export class CreationComponent implements OnInit, OnChanges {
  @Input() operator!: string;
  #subscription!: Subscription;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['operator']) {
      if (this.#subscription) {
        this.#subscription.unsubscribe();
      }
      const callback = creationOperators.get(this.operator);
      if (callback) {
        this.#subscription = callback();
      }
    }
  }

  ngOnInit(): void {}
}
