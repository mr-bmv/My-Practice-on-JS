/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список и возвращает новый, состоящий из элементов, у которых такая же четность, как и у первого элемента входного списка.

sameParity(l(-1, 0, 1, -3, 10, -2)); // (-1, 1, -3)

sameParity(l()); // ()
*/

// eslint-disable-next-line
import { l, isEmpty, head, tail, filter, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)

const solution = list => filter(element => 
  Math.abs(element % 2) === Math.abs(head(list) % 2), list);

export default solution;



// END


// решение учителя

export default (list) => {
  if (isEmpty(list)) {
    return l();
  }

  const first = head(list);

  return filter(value => Math.abs(first % 2) === Math.abs(value % 2), list);
};
