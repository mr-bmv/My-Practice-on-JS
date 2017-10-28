const cons = (a,b) => (f) => f(a,b);
const car = (f) => f((a,b) => a);
const cdr = (f) => f((a,b) => b);

const make = (numer, denom) => cons(numer, denom);
const numer = pair => car(pair);
const denom = pair => cdr(pair);

const toString = rat => `${numer(rat)}/${denom(rat)}`;

const mm = make(3,5);
const str = toString(mm)

const dd = numer(make(3,5))
console.log(dd)
console.log(str)
