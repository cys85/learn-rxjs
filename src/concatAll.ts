import { interval } from 'rxjs';
import { map, take, concatAll } from 'rxjs/operators';

/*
 * @Author: cys
 * @Date: 2018-10-14 18:04:12
 * @Last Modified by: cys
 * @Last Modified time: 2018-10-14 18:54:15
 */


const hot$ = interval(1000).pipe(take(2),
  map((val) => interval(500).pipe(take(2), map((itemVal) => `${val}-${itemVal}`))),
);

hot$.pipe(concatAll())
  .subscribe(console.log);
