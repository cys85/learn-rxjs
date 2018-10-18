import { interval } from 'rxjs';
import { debounce } from 'rxjs/operators';


const source$ = interval(1000).pipe(debounce((val) => interval(val % 3 === 0 ? 500 : 900))).subscribe(console.log);
