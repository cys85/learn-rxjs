import { timer, forkJoin } from 'rxjs';

const source1$ = timer(2000);
const source2$ = timer(3000);

const concated = forkJoin(source1$, source2$);
concated.subscribe(console.log);
