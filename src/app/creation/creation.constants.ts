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
  fromEventPattern,
} from 'rxjs';

export const creationOperators: Map<string, Function> = new Map([
  ['ajax', demoAjax],
  ['bindCallback', demoBindCallback],
  ['bindNodeCallback', demoBindNodeCallback],
  ['defer', demoDefer],
  ['from', demoFrom],
  ['fromEvent', demoFromEvent],
  ['fromEventPattern', demoFromEventPattern],
  // 'generate',
  ['interval', demoInterval],
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
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}

function demoBindCallback() {
  const callback$ = bindCallback(demoAjax)();
  callback$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}

function sampleNodeCallback(callback: any) {
  callback(null, 5, 'hello');
}
function demoBindNodeCallback() {
  const boundSomeFunction = bindNodeCallback(sampleNodeCallback);
  boundSomeFunction().subscribe((value) => {
    console.log('value emitted', value);
  });
}

function demoDefer() {
  const src$ = defer(() => {
    return Math.random() > 0.5 ? fromEvent(document, 'click') : interval(1000);
  });
  src$.subscribe({
    next: (value) => console.log('value emitted', value),
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
function demoFromEvent() {
  const src$ = fromEvent(document, 'click');
  src$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}
function demoFromEventPattern() {
  const addEventHandler = (handler: any) => {
    document.addEventListener('click', handler);
  };
  const removeEventHandler = (handler: any) => {
    document.removeEventListener('click', handler);
  };
  const src$ = fromEventPattern(addEventHandler, removeEventHandler);
  src$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}
function demoInterval() {
  const src$ = interval(1000);
  src$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}
