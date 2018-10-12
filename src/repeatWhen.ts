import { of, interval } from 'rxjs';
import { repeatWhen } from 'rxjs/operators';


of(1, 2, 3, 4).pipe(repeatWhen(() => interval(2000))).subscribe(console.log);


