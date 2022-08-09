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


export function demoAjax() {
  return ajax({
    url: 'https://catfact.ninja/fact',
    method: 'GET',
  });
}

export function sampleCallback(callback: any) {
  callback(null, 5, 'hello');
}
export function demoBindCallback() {
  return bindCallback(sampleCallback)();
}
export function demoBindNodeCallback() {
  return bindNodeCallback(sampleCallback)();
}

export function demoDefer() {
  return defer(() => {
    return Math.random() > 0.5 ? fromEvent(document, 'click') : interval(1000);
  });
}
export function demoFrom() {
  return from(Promise.resolve([100, 200, 3000]));
}
export function demoFromEvent() {
  return fromEvent(document, 'click');
}
export function demoFromEventPattern() {
  const addEventHandler = (handler: any) => {
    document.addEventListener('click', handler);
  };
  const removeEventHandler = (handler: any) => {
    document.removeEventListener('click', handler);
  };
  return fromEventPattern(addEventHandler, removeEventHandler);
}
export function demoGenerate() {
  return generate({
    initialState: 0,
    condition: (x) => x < 5,
    iterate: (x) => x + 1,
    resultSelector: (x: number) => x,
  });
}
export function demoInterval() {
  return interval(1000);
}
export function demoOf() {
  return of(1000, 2000, 40000);
}
export function demoRange() {
  return range(3, 10);
}
export function demoThrowError() {
  return throwError(() => {
    return new Error('sample error');
  });
}
export function demoTimer() {
  // return timer(0, 1000);
  return timer(1000);
}
export function demoIif() {
  let isSuccess = false;
  return iif(() => isSuccess, of('success'), of('failure'));
}
