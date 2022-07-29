import { ajax } from 'rxjs/ajax';
import {
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
  throwError,
  iif,
  generate,
} from 'rxjs';

export const creationOperators: Map<string, Function> = new Map([
  ['ajax', demoAjax],
  ['bindCallback', demoBindCallback],
  ['bindNodeCallback', demoBindNodeCallback],
  ['defer', demoDefer],
  ['from', demoFrom],
  ['fromEvent', demoFromEvent],
  ['fromEventPattern', demoFromEventPattern],
  ['generate', demoGenerate],
  ['interval', demoInterval],
  ['of', demoOf],
  ['range', demoRange],
  ['throwError', demoThrowError],
  ['timer', demoTimer],
  ['iif', demoIif],
]);

function demoAjax() {
  return ajax({
    url: 'https://catfact.ninja/fact',
    method: 'GET',
  });
}

function demoBindCallback() {
  return bindCallback(sampleNodeCallback)();
}

function sampleNodeCallback(callback: any) {
  callback(null, 5, 'hello');
}
function demoBindNodeCallback() {
  return bindNodeCallback(sampleNodeCallback)();
}

function demoDefer() {
  return defer(() => {
    return Math.random() > 0.5 ? fromEvent(document, 'click') : interval(1000);
  });
}
function demoFrom() {
  return from(Promise.resolve([100, 200, 3000]));
}
function demoFromEvent() {
  return fromEvent(document, 'click');
}
function demoFromEventPattern() {
  const addEventHandler = (handler: any) => {
    document.addEventListener('click', handler);
  };
  const removeEventHandler = (handler: any) => {
    document.removeEventListener('click', handler);
  };
  return fromEventPattern(addEventHandler, removeEventHandler);
}
function demoInterval() {
  return interval(1000);
}
function demoOf() {
  return of(1000, 2000, 40000);
}
function demoRange() {
  return range(3, 10);
}
function demoTimer() {
  // const src$ = timer(0, 1000);
  return timer(1000);
}
function demoThrowError() {
  return throwError(() => {
    return new Error('sample error');
  });
}
function demoIif() {
  let isSuccess = true;
  return iif(() => isSuccess, of('success'), of('failure'));
}
function demoGenerate() {
  return generate({
    initialState: 0,
    condition: (x) => x < 5,
    iterate: (x) => x + 1,
    resultSelector: (x: number) => x,
  });
}
