import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-playground';
  currentIndex = 0;
  currentCategoryIndex = 0;
  categories = [
    { text: 'Creation', value: 'creation' },
    { text: 'Join Creation', value: 'joincreation' },
    { text: 'Transformation', value: 'transformation' },
    { text: 'Filtering', value: 'filtering' },
  ];
  categoryItems: Record<string, string[]> = {
    creation: [
      'ajax',
      'bindCallback',
      'bindNodeCallback',
      'defer',
      'from',
      'fromEvent',
      'fromEventPattern',
      'generate',
      'interval',
      'of',
      'range',
      'throwError',
      'timer',
      'iif',
    ],
    joincreation: [
      'combineLatest',
      'concat',
      'forkJoin',
      'merge',
      'partition',
      'race',
      'zip',
    ],
    transformation: [
      'buffer',
      'bufferCount',
      'bufferTime',
      'bufferToggle',
      'bufferWhen',
      'map',
      'concatMap',
      'mergeMap',
      'switchMap',
      'exhaustMap',
      'expand',
      'groupBy',
      'pairwise',
      'scan',
      'mergeScan',
      'switchScan',
      'window',
      'windowCount',
      'windowTime',
      'windowToggle',
      'windowWhen',
    ],
    filtering: [
      'filter',
      'elementAt',
      'first',
      'last',
      'single',
      'ignoreElements',
      'take',
      'takeLast',
      'takeUntil',
      'takeWhile',
      'skip',
      'skipLast',
      'skipUntil',
      'skipWhile',
      'distinct',
      'distinctUntilChanged',
      'distinctUntilKeyChanged',
    ],
  };
  items: string[] = this.categoryItems[this.categories[0].value];

  trackByFn(index: number) {
    return index;
  }

  setActive(index: number) {
    this.currentIndex = index;
  }

  selectCategory(index: number) {
    this.currentCategoryIndex = index;
    this.items = this.categoryItems[this.categories[index].value];
  }
}
