/*
Экспорт и импорт, "безымянные функции"
*/

import cube from './function1';
import sqrt3 from './function3';
import multi2, { pow2, sub2, sum2 } from './function2';

export default cube;
export const pow = pow2;
export const sub = sub2;
export const sum = sum2;
export const sqrt = sqrt3;
export const multi = multi2;


console.log(cube(2));
console.log(multi(2, 5));
console.log(pow(2, 6) + sub(8, 7));
console.log(pow(2, 6));
console.log(sub(8, 7));
console.log(sum(3, 7));
console.log(sqrt(16));

