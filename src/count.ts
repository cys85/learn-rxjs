import { of, interval, concat } from 'rxjs';
import { take, count, filter } from 'rxjs/operators';

const source1$ = of(1, 2, 3);

const source2$ = interval(1000);

const count$ = concat(source1$, source2$.pipe(take(3))).pipe(count());
count$.subscribe(console.log);
