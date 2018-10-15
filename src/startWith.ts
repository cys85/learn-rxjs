import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

const source$ = of(1, 2, 3, 4);
source$.pipe(startWith('cys'))
.subscribe(console.log);
