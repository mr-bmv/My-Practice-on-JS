// примнимет функцию и список
// на основании функции провоить фильтрацию списка

import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from ''; // eslint-disable-line
import { make, append, node, value, is, toString as htmlToString, map } from ''; // eslint-disable-line

export const filterIter = ( func, stuff) => {
  const iter = (stuff, acc) => {
    if (isEmpty(stuff)) {
      return reverse(acc);
    }
  if ( func(head(stuff))) {  // берем первый элемент списка и смотрим true к нему данная функция
    return iter(tail(stuff), cons(head(stuff), acc)); // если да, оставляем и углубляемся
  } else { // нет
    return iter(tail(stuff) , acc); // углубляемся
  }
}
  return iter( stuff, l());
};

export const quotes = elements =>
  filterIter(element => name(elemet) === 'blockquote', elements);


/* тоже решение, другое оформление
export const filter = (func, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    const item = head(items);
    const newAcc = func(item) ? cons(item, acc) : acc;
    return iter(tail(items), newAcc);
  };

  return iter(elements, l());
};
*/
