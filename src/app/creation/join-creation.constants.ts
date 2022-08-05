import {
  timer,
  take,
  interval,
  combineLatest,
  concat,
  forkJoin,
  merge,
  partition,
  race,
  range,
  zip,
} from 'rxjs';

export function demoCombineLatest() {
  // const src1$ = range(0, 10);
  // const src2$ = range(10, 10);
  const src1$ = timer(0, 1000).pipe(take(5));
  const src2$ = interval(1000).pipe(take(5));
  // return combineLatest([src1$, src2$]);
  return combineLatest({ src1$, src2$ });
}
export function demoConcat() {
  const src1$ = timer(0, 1000).pipe(take(5));
  const src2$ = interval(1000).pipe(take(5));
  return concat(src1$, src2$);
}
export function demoForkJoin() {
  const src1$ = timer(0, 1000).pipe(take(5));
  const src2$ = interval(1000).pipe(take(5));
  // const src1$ = range(0, 10);
  // const src2$ = range(10, 10);
  // return forkJoin([src1$, src2$]);
  return forkJoin({ src1$, src2$ });
}
export function demoMerge() {
  const src1$ = timer(0, 1000).pipe(take(5));
  const src2$ = interval(1000).pipe(take(5));
  return merge(src1$, src2$);
}
export function demoPartition() {
  const src1$ = timer(0, 1000).pipe(take(5));
  const [matches$, rejects$] = partition(src1$, (x: number) => x % 2 === 0);
  rejects$.subscribe({
    next: (value: any) => console.log('Rejected value emitted', value),
    error: (err: any) => console.log(err),
  });
  return matches$;
}

export function demoRace() {
  const src1$ = timer(0, 1000).pipe(take(5));
  const src2$ = interval(1000).pipe(take(5));
  // const src1$ = range(0, 10);
  // const src2$ = range(10, 10);
  return race([src1$, src2$]);
}
export function demoZip() {
  // const src1$ = timer(0, 1000).pipe(take(5));
  // const src2$ = interval(1000).pipe(take(5));
  const src1$ = range(0, 10);
  const src2$ = range(10, 10);
  return zip([src1$, src2$]);
}
