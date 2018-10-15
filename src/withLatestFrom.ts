import { timer } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

const source1$ = timer(0, 2000).pipe(map((x) => x * 100));
const source2$ = timer(500, 1000);
const result$ = source1$.pipe(withLatestFrom(source2$, (a, b) => a + b));
result$.subscribe(console.log);
