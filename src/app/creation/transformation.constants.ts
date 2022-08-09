import {
  buffer,
  bufferCount,
  bufferTime,
  bufferToggle,
  bufferWhen,
  concatMap,
  exhaustMap,
  expand,
  from,
  fromEvent,
  groupBy,
  interval,
  map,
  mergeAll,
  mergeMap,
  of,
  pairwise,
  reduce,
  switchMap,
  take,
  timer,
} from 'rxjs';

export function demoBuffer() {
  const src1$ = fromEvent(document, 'click');
  const src2$ = interval(1000);
  return src2$.pipe(buffer(src1$));
}
export function demoBufferCount() {
  const src1$ = interval(1000);
  return src1$.pipe(bufferCount(3));
}
export function demoBufferTime() {
  const src1$ = interval(1000);
  return src1$.pipe(bufferTime(2000));
}
export function demoBufferToggle() {
  const openings = fromEvent(document, 'click');
  const src1$ = interval(1000);
  return src1$.pipe(bufferToggle(openings, () => timer(500)));
}
export function demoBufferWhen() {
  const openings = fromEvent(document, 'click');
  const src1$ = interval(1000);
  return src1$.pipe(bufferWhen(() => openings));
}
export function demoMap() {
  // const src1$ = from([10, 20, 30]);
  const src1$ = from([
    { name: 'a', age: 10 },
    { name: 'b', age: 20 },
  ]);
  // return src1$.pipe(map((i) => 100 * i));
  return src1$.pipe(map((i) => i.age));
}
export function demoConcatMap() {
  const clicks = fromEvent(document, 'click');
  return clicks.pipe(concatMap(() => interval(1000).pipe(take(5))));
}
export function demoMergeMap() {
  const clicks = fromEvent(document, 'click');
  return clicks.pipe(mergeMap(() => interval(1000).pipe(take(5))));
}
export function demoSwitchMap() {
  const clicks = fromEvent(document, 'click');
  return clicks.pipe(switchMap(() => interval(1000).pipe(take(5))));
}
export function demoExhaustMap() {
  const clicks = fromEvent(document, 'click');
  return clicks.pipe(exhaustMap(() => interval(1000).pipe(take(5))));
}
export function demoExpand() {
  const clicks = fromEvent(document, 'click');
  return clicks.pipe(
    map(() => 1),
    expand((i) => of(i * 2)),
    take(10)
  );
}
export function demoGroupBy() {
  const src1$ = of(
    { id: 1, name: 'test' },
    { id: 2, name: 'test2' },
    { id: 1, name: 'test1' },
    { id: 2, name: 'test3' }
  );
  return src1$.pipe(
    groupBy((val) => val.id),
    mergeMap((group$) =>
      group$.pipe(reduce((acc: any, cur) => [...acc, cur], []))
    )
  );
}
export function demoPairwise() {
  const src1$ = interval(1000);
  return src1$.pipe(pairwise());
}
