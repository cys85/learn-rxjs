import { generate } from 'rxjs';

const i = 0;
generate(
  1,
  (value) => value < 5,
  (value) => value + 1,
  (value) => value * 2,
).subscribe(console.log);
console.log('=====================================');
