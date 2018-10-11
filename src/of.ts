
import {of, Observable} from 'rxjs';

const source$ = of(1, 2, 3, 4);
source$.subscribe((val) => {
  console.log(val);
});

console.log('=====================================');

