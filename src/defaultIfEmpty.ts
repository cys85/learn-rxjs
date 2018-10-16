import { of, from } from 'rxjs';
import { defaultIfEmpty, map } from 'rxjs/operators';

const source$ = from(new Promise((resolve) => {
  setTimeout(() => {
    resolve('');
  }, 2000);
})).pipe(map((val) => ''), defaultIfEmpty('控制'))
  .subscribe(console.log);

