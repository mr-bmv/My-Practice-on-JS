// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from '';

// BEGIN (write your solution here)
export const has = (list, num) => {

  if ( isEmpty(list) === true) {
    return false;
  } else if ( head(list) === num){
    return true;
  } else {
    return has(tail(list), num);
  }
}

export const reverse = (list) => {


  if ( isEmpty(list) === true) {
    return "()";
  }

  const iter = (list, acc) => {
    if ( isEmpty(list) === true) {
      return `(${acc})`;
    } else {
      return iter(tail(list), `${head(list)}, ${acc}`);
    }
  }

  return iter(tail(list), head(list));
}

export const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }

  return cons(head(list1), concat(tail(list1), list2));
};

// END
/*
list.js
Реализуйте и экспортируйте функцию has, которая проверяет, является ли
переданное значение элементом списка.

const numbers = l(3, 4, 5, 8);
has(numbers, 8); // true
has(numbers, 0); // false
Реализуйте и экспортируйте функцию reverse, которая переворачивает список,
используя итеративный процесс.

const numbers = l(3, 4, 5);
reverse(numbers); // (5, 4, 3)
Реализуйте и экспортируйте функцию concat, которая соединяет два списка,
используя рекурсивный процесс (попробуйте сначала представить, как работала бы
функция copy, которая принимает на вход список и возвращает его копию).

const numbers = l(3, 4, 5, 8);
const numbers2 = l(3, 2, 9);
concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)
*/
