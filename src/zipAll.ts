import { interval } from 'rxjs';
import { take, map, zipAll } from 'rxjs/operators';

/*
 * @Author: cys
 * @Date: 2018-10-14 18:22:48
 * @Last Modified by: cys
 * @Last Modified time: 2018-10-14 18:25:09
 */
const ho$ = interval(1000).pipe(
  take(2),
  map(
    (x) => interval(500).pipe(
      take(2),
      map((y) => `${x}:${y}`),
    ),
  ),
  zipAll(),
)
.subscribe(console.log);
