/*
которая находит сумму последовательности целых чисел. 
Последовательность задается двумя значениями
*/
const sequenceSum = (begin, end) => {
    if ( begin > end) {
      return NaN;
    } else if ( begin === end){
      return end;
    } else {
      return begin + sequenceSum(begin + 1, end);
    }
};

console.log(sequenceSum(-5, 6));



