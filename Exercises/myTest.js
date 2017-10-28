import { getTriangleArea } from './myMathModule';
import square from './square';

const myTest = n => getTriangleArea(n, square(n) / 2);

console.log(myTest(20));
