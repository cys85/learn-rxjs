import { interval } from 'rxjs';
import { take, every } from 'rxjs/operators';



const source$ = interval(1000).pipe(take(5), every((val) => val < 3))
  .subscribe(console.log);
