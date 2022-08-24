import {
  elementAt,
  filter,
  first,
  from,
  fromEvent,
  ignoreElements,
  interval,
  last,
  single,
  skip,
  skipLast,
  skipUntil,
  skipWhile,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  timer,
} from 'rxjs';

export function demoFilter() {
  const src1$ = interval(1000);
  return src1$.pipe(filter((elem) => elem % 2 === 0));
}

export function demoElementAt() {
  const src1$ = interval(1000);
  return src1$.pipe(elementAt(5));
}

export function demoFirst() {
  const src1$ = interval(1000);
  return src1$.pipe(first());
}
export function demoLast() {
  const src1$ = from([1, 2, 3]);
  return src1$.pipe(last());
}
export function demoSingle() {
  const src1$ = from([1, 2, 3]);
  // const src1$ = from([1, 2, 3, 4]);
  return src1$.pipe(single((elem) => elem % 2 === 0));
}
export function demoIgnoreElements() {
  const src1$ = from([1, 2, 3]);
  return src1$.pipe(ignoreElements());
}
export function demoTake() {
  const src1$ = interval(1000);
  return src1$.pipe(take(5));
}
export function demoTakeLast() {
  const src1$ = from([1, 2, 3, 4, 5]);
  return src1$.pipe(takeLast(2));
}
export function demoTakeUntil() {
  const notifier = timer(5000, 1000);
  const src1$ = interval(1000);
  return src1$.pipe(takeUntil(notifier));
}
export function demoTakeWhile() {
  const src1$ = interval(1000);
  return src1$.pipe(takeWhile((val) => val <= 5));
}
export function demoSkip() {
  const src1$ = interval(1000);
  return src1$.pipe(skip(5));
}
export function demoSkipLast() {
  const src1$ = from([1, 2, 3, 4, 5]);
  return src1$.pipe(skipLast(2));
}
export function demoSkipUntil() {
  const notifier = timer(5000, 1000);
  const src1$ = interval(1000);
  return src1$.pipe(skipUntil(notifier));
}
export function demoSkipWhile() {
  const src1$ = interval(1000);
  return src1$.pipe(skipWhile((val) => val <= 5));
}
