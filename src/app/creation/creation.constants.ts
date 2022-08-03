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
  combineLatest,
  concat,
  forkJoin,
  take,
  merge,
  partition,
  race,
  zip,
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
  ['combineLatest', demoCombineLatest],
  ['concat', demoConcat],
  ['forkJoin', demoForkJoin],
  ['merge', demoMerge],
  ['partition', demoPartition],
  ['race', demoRace],
  ['zip', demoZip],
]);

function demoAjax() {
  return ajax({
    url: 'https://catfact.ninja/fact',
    method: 'GET',
  });
}

function sampleCallback(callback: any) {
  callback(null, 5, 'hello');
}
function demoBindCallback() {
  return bindCallback(sampleCallback)();
}
function demoBindNodeCallback() {
  return bindNodeCallback(sampleCallback)();
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
function demoGenerate() {
  return generate({
    initialState: 0,
    condition: (x) => x < 5,
    iterate: (x) => x + 1,
    resultSelector: (x: number) => x,
  });
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
function demoThrowError() {
  return throwError(() => {
    return new Error('sample error');
  });
}
function demoTimer() {
  // return timer(0, 1000);
  return timer(1000);
}
function demoIif() {
  let isSuccess = false;
  return iif(() => isSuccess, of('success'), of('failure'));
}
function demoCombineLatest() {
  // const src1$ = range(0, 10);
  // const src2$ = range(10, 10);
  const src1$ = timer(0, 1000).pipe(take(5));
  const src2$ = interval(1000).pipe(take(5));
  // return combineLatest([src1$, src2$]);
  return combineLatest({ src1$, src2$ });
}
function demoConcat() {
  const src1$ = timer(0, 1000).pipe(take(5));
  const src2$ = interval(1000).pipe(take(5));
  return concat(src1$, src2$);
}
function demoForkJoin() {
  const src1$ = timer(0, 1000).pipe(take(5));
  const src2$ = interval(1000).pipe(take(5));
  // const src1$ = range(0, 10);
  // const src2$ = range(10, 10);
  // return forkJoin([src1$, src2$]);
  return forkJoin({ src1$, src2$ });
}
function demoMerge() {
  const src1$ = timer(0, 1000).pipe(take(5));
  const src2$ = interval(1000).pipe(take(5));
  return merge(src1$, src2$);
}
function demoPartition() {
  const src1$ = timer(0, 1000).pipe(take(5));
  const [matches$, rejects$] = partition(src1$, (x: number) => x % 2 === 0);
  rejects$.subscribe({
    next: (value: any) => console.log('Rejected value emitted', value),
    error: (err: any) => console.log(err),
  });
  return matches$;
}

function demoRace() {
  const src1$ = timer(0, 1000).pipe(take(5));
  const src2$ = interval(1000).pipe(take(5));
  // const src1$ = range(0, 10);
  // const src2$ = range(10, 10);
  return race([src1$, src2$]);
}
function demoZip() {
  // const src1$ = timer(0, 1000).pipe(take(5));
  // const src2$ = interval(1000).pipe(take(5));
  const src1$ = range(0, 10);
  const src2$ = range(10, 10);
  return zip([src1$, src2$]);
}
