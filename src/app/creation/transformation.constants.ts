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
  mergeScan,
  of,
  pairwise,
  reduce,
  scan,
  switchMap,
  switchScan,
  take,
  timer,
  window,
  windowCount,
  windowTime,
  windowToggle,
  windowWhen,
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

export function demoScan() {
  const src1$ = fromEvent(document, 'click');
  return src1$.pipe(
    map(() => 1),
    scan((acc, val) => acc + val)
  );
}

export function demoMergeScan() {
  const src1$ = fromEvent(document, 'click');
  return src1$.pipe(
    map(() => 1),
    mergeScan((acc, val) => interval((acc + val) * 300).pipe(take(5)), 0)
  );
}
export function demoSwitchScan() {
  const src1$ = fromEvent(document, 'click');
  return src1$.pipe(
    map(() => 1),
    switchScan((acc, val) => interval((acc + val) * 300).pipe(take(5)), 0)
  );
}
export function demoWindow() {
  const src1$ = fromEvent(document, 'click');
  const src2$ = interval(1000);
  return src2$.pipe(
    window(src1$),
    map((val$) => val$.pipe(take(2))),
    mergeAll()
  );
}
export function demoWindowCount() {
  const src1$ = interval(1000);
  return src1$.pipe(
    windowCount(3),
    map((val$) => val$.pipe(take(2))),
    mergeAll()
  );
}
export function demoWindowTime() {
  const src1$ = interval(1000);
  return src1$.pipe(
    windowTime(3000),
    map((val$) => val$.pipe(take(2))),
    mergeAll()
  );
}
export function demoWindowToggle() {
  const openings = fromEvent(document, 'click');
  const src1$ = interval(1000);
  return src1$.pipe(
    windowToggle(openings, () => timer(3000)),
    mergeAll()
  );
}
export function demoWindowWhen() {
  const openings = fromEvent(document, 'click');
  const src1$ = interval(1000);
  return src1$.pipe(
    windowWhen(() => openings),
    map((win) => win.pipe(take(2))),
    mergeAll()
  );
}
