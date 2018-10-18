import { throttleTime } from 'rxjs/operators';
import { interval } from 'rxjs';

const source$ = interval(1000).pipe(throttleTime(2000)).subscribe(console.log);
