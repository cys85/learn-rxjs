import { interval } from 'rxjs';
import { take, map, mergeAll } from 'rxjs/operators';

/*
 * @Author: cys
 * @Date: 2018-10-14 18:13:20
 * @Last Modified by: cys
 * @Last Modified time: 2018-10-14 18:17:53
 */

const hot$ = interval(1000).pipe(
  take(2),
  map((x) =>
    interval(1000).pipe(
      take(2),
      map((y) => `${x}:${y}`),
    )),
  mergeAll(),
).subscribe(console.log);

