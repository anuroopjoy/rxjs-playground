import { ajax } from 'rxjs/ajax';
import {
  map,
  catchError,
  of,
  bindCallback,
  bindNodeCallback,
  defer,
  fromEvent,
  interval,
  from,
} from 'rxjs';

export const creationOperators: Map<string, Function> = new Map([
  ['ajax', demoAjax],
  ['bindCallback', demoBindCallback],
  ['bindNodeCallback', demoBindNodeCallback],
  ['defer', demoDefer],
  ['from', demoFrom],
  // 'from',
  // 'fromEvent',
  // 'fromEventPattern',
  // 'generate',
  // 'interval',
  // 'of',
  // 'range',
  // 'throwError',
  // 'timer',
  // 'iif',
]);

function demoAjax() {
  const obs$ = ajax({
    url: 'https://catfact.ninja/fact',
    method: 'GET',
  });
  obs$.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log(err),
  });
}

function demoBindCallback() {
  const callback$ = bindCallback(demoAjax)();
  callback$.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log(err),
  });
}

function sampleNodeCallback(callback: any) {
  callback(null, 5, 'hello');
}
function demoBindNodeCallback() {
  const boundSomeFunction = bindNodeCallback(sampleNodeCallback);
  boundSomeFunction().subscribe((value) => {
    console.log(value);
  });
}

function demoDefer() {
  const src$ = defer(() => {
    return Math.random() > 0.5 ? fromEvent(document, 'click') : interval(1000);
  });
  src$.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log(err),
  });
}
function demoFrom() {
  const src$ = from(Promise.resolve([100, 200, 3000]));
  src$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}
