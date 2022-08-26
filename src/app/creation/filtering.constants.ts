import {
  audit,
  auditTime,
  debounce,
  debounceTime,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  elementAt,
  filter,
  first,
  from,
  fromEvent,
  ignoreElements,
  interval,
  last,
  of,
  sample,
  sampleTime,
  single,
  skip,
  skipLast,
  skipUntil,
  skipWhile,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  throttle,
  throttleTime,
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
export function demoDistinct() {
  // const src1$ = from([1, 2, 2, 3, 4, 5, 4]);
  const src1$ = of(
    { name: 'a', age: 1 },
    { name: 'b', age: 2 },
    { name: 'b', age: 3 },
    { name: 'a', age: 4 }
  );
  // return src1$.pipe(distinct());
  return src1$.pipe(distinct(({ name }) => name));
}
export function demoDistinctUntilChanged() {
  // const src1$ = from([1, 2, 2, 3, 4, 5, 4]);
  const src1$ = of(
    { name: 'a', age: 1 },
    { name: 'b', age: 2 },
    { name: 'b', age: 3 },
    { name: 'a', age: 4 }
  );
  // return src1$.pipe(distinctUntilChanged());
  return src1$.pipe(
    distinctUntilChanged((prev, curr) => {
      return prev.name === curr.name;
    })
  );
}
export function demoDistinctUntilKeyChanged() {
  const src1$ = of(
    { name: 'a', age: 1 },
    { name: 'b', age: 2 },
    { name: 'b', age: 3 },
    { name: 'ab', age: 4 },
    { name: 'aa', age: 4 }
  );
  return src1$.pipe(
    distinctUntilKeyChanged('name', (prev, curr) => {
      return prev.substring(0, 1) === curr.substring(0, 1);
    })
  );
  // return src1$.pipe(distinctUntilKeyChanged('name'));
}

export function demoAudit() {
  const src1$ = fromEvent(document, 'click');
  return src1$.pipe(audit(() => interval(3000)));
}

export function demoAuditTime() {
  const src1$ = fromEvent(document, 'click');
  return src1$.pipe(auditTime(3000));
}
export function demoDebounce() {
  const src1$ = fromEvent(document, 'click');
  return src1$.pipe(debounce(() => interval(3000)));
}

export function demoDebounceTime() {
  const src1$ = fromEvent(document, 'click');
  return src1$.pipe(debounceTime(3000));
}
export function demoSample() {
  const src1$ = fromEvent(document, 'click');
  const src2$ = interval(3000);
  return src2$.pipe(sample(src1$));
}

export function demoSampleTime() {
  const src1$ = fromEvent(document, 'click');
  return src1$.pipe(sampleTime(3000));
}
export function demoThrottle() {
  const src1$ = fromEvent(document, 'click');
  return src1$.pipe(throttle(() => interval(3000)));
}

export function demoThrottleTime() {
  const src1$ = fromEvent(document, 'click');
  return src1$.pipe(throttleTime(3000));
}
