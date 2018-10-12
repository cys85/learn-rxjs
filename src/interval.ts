import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

interval(1000).pipe(map((val) => val * 2)).subscribe(console.log);

