import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { operatorMap } from './operators.constants';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss'],
})
export class CreationComponent implements OnInit, OnChanges {
  @Input() operator!: string;
  #subscription!: Subscription;
  result$!: Observable<any>;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['operator']) {
      if (this.#subscription) {
        this.#subscription.unsubscribe();
      }
      console.clear();
      const callback = operatorMap.get(this.operator);
      if (callback) {
        this.result$ = callback();
        this.#subscription = this.result$.subscribe({
          next: (value: any) => console.log('value emitted', value),
          error: (err: any) => console.log(err),
        });
      }
    }
  }

  ngOnInit(): void {}
}
