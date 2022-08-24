import {
  elementAt,
  filter,
  first,
  from,
  ignoreElements,
  interval,
  last,
  single,
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
