import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

const source$ = interval(1000).pipe(throttle((val) => interval(1200))).subscribe(console.log);
