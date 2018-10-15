import { defer, of } from 'rxjs';

const observableFactory = () => of(1, 2, 3);
defer(observableFactory).subscribe(console.log);
