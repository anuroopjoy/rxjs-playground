import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-playground';
  currentIndex = 4;

  items = [
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
  ];

  trackByFn(index: number) {
    return index;
  }

  setActive(index: number) {
    this.currentIndex = index;
  }
}
