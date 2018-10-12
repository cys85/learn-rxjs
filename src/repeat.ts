import { of } from 'rxjs';
import {repeat} from 'rxjs/operators';

of(1, 2, 3).pipe(repeat(2)).subscribe(console.log);
