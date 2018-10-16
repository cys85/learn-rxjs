import { interval, timer } from 'rxjs';
import { takeUntil, defaultIfEmpty, map } from 'rxjs/operators';

const source2$ = timer(1000);
const source1$ = interval(5000)
  .pipe(map((val) => String(val)), takeUntil(source2$), defaultIfEmpty('提前结束了')).subscribe(console.log);

