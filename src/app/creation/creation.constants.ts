import { ajax } from 'rxjs/ajax';
import { map, catchError, of, bindCallback, bindNodeCallback } from 'rxjs';

export const creationOperators: Map<string, Function> = new Map([
  ['ajax', demoAjax],
  ['bindCallback', demoBindCallback],
  ['bindNodeCallback', demoBindNodeCallback],
  // 'bindNodeCallback',
  // 'defer',
  // 'empty',
  // 'from',
  // 'fromEvent',
  // 'fromEventPattern',
  // 'generate',
  // 'interval',
  // 'of',
  // 'range',
  // 'throwError',
  // 'timer',
  // 'iif',
]);

function demoAjax() {
  const obs$ = ajax({
    url: 'https://catfact.ninja/fact',
    method: 'GET',
  });
  obs$.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log(err),
  });
}

function demoBindCallback() {
  const callback$ = bindCallback(demoAjax)();
  callback$.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log(err),
  });
}

function sampleNodeCallback(callback: any) {
  callback(null, 5, 'some string');
}
function demoBindNodeCallback() {
  const boundSomeFunction = bindNodeCallback(sampleNodeCallback);
  boundSomeFunction().subscribe((value) => {
    console.log(value); // [5, "some string"]
  });
}
