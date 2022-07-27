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
  range,
  timer,
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
  ['of', demoOf],
  ['range', demoRange],
  // 'throwError',
  ['timer', demoTimer],
  // 'iif',
]);

function demoAjax() {
  const obs$ = ajax({
    url: 'https://catfact.ninja/fact',
    method: 'GET',
  });
  return obs$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}

function demoBindCallback() {
  const callback$ = bindCallback(demoAjax)();
  return callback$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}

function sampleNodeCallback(callback: any) {
  callback(null, 5, 'hello');
}
function demoBindNodeCallback() {
  const boundSomeFunction = bindNodeCallback(sampleNodeCallback);
  return boundSomeFunction().subscribe((value) => {
    console.log('value emitted', value);
  });
}

function demoDefer() {
  const src$ = defer(() => {
    return Math.random() > 0.5 ? fromEvent(document, 'click') : interval(1000);
  });
  return src$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}
function demoFrom() {
  const src$ = from(Promise.resolve([100, 200, 3000]));
  return src$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}
function demoFromEvent() {
  const src$ = fromEvent(document, 'click');
  return src$.subscribe({
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
  return src$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}
function demoInterval() {
  const src$ = interval(1000);
  return src$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}
function demoOf() {
  const src$ = of(1000, 2000, 40000);
  return src$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}
function demoRange() {
  const src$ = range(3, 10);
  return src$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}
function demoTimer() {
  // const src$ = timer(0, 1000);
  const src$ = timer(1000);
  return src$.subscribe({
    next: (value) => console.log('value emitted', value),
    error: (err) => console.log(err),
  });
}
