/*export const cons = (a, b) => (message) =>{
  switch (message){
    case 'car':
    return a;
    case 'cdr':
    return b;
  }
};
*/

export const cons = (x, y) => f => f(x, y);

//export const car = (cons) => cons(car);
export const car = f => f((a, b) => a); // внутри прописано определение функции f, т.е. f = (a, b) => a
//export const cdr = (cons) => cons(cdr);
export const cdr = f => f((a, b) => b);


export const toString = pair => `(${car(pair)}, ${cdr(pair)})`;
