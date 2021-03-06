import { timer, race } from 'rxjs';
import { map } from 'rxjs/operators';

const source1$ = timer(0, 2000).pipe(map((x) => x + 'a'));

const source2$ = timer(500, 1000).pipe(map((x) => x + 'b'));
const winner$ = race(source1$, source2$);
winner$.subscribe(console.log);
