// функция принимает функцию, аккумулятор и список
// более универсальна и может описать filter и map

export const reduce = (func, acc, elements) => {
  const iter = (items, acc) => {

    if (isEmpty(items)){
      return acc;
    }

    const item = head(list);
    const newAcc = func(item, acc);
    return iter(tail(item), newAcc)
  }

  return iter(elements, acc);
}

export const reduce = (func, acc, elements) => {
  const iter = (items, result) => {
    if (isEmpty(items)) {
      return result;
    }

    return iter(tail(items), func(head(items), result));
  };
  return iter(elements, acc);
};

// Пример работы
import { l, cons, reduce, toString, head } from 'hexlet-pairs-data';

const list = l(0, -10, 2, 38, 2, -2);
const list2 = reduce(Math.max, head(list), list);
console.log(toString(list2));

const list3 = reduce((item, acc) => item + acc, 0, list);
console.log(toString(list3));

//  пример работы
export const emptyTagsCount = (tagName, elements) => {
  const predicate = element => is(tagName, element) && value(element) === '';
  const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
  return reduce(func, 0, elements);
};

/*
Реализуйте и экспортируйте функцию reduce для библиотеки html-tags:

import { node, append, make, reduce } from 'hexlet-html-tags';

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

reduce((element, acc) => {
  return is('h1', element) ? acc + 1 : acc;
}, 0, html3); // 2
Реализуйте и экспортируйте функцию emptyTagsCount, которая считает количество
пустых тегов. Тип тега задается первым параметром функции.

import { make, append, node } from 'hexlet-html-tags';

const html1 = make();
const html2 = append(html1, node('h1', 'scheme'));
const html3 = append(html2, node('p', 'is a lisp'));
const html4 = append(html3, node('blockquote', ''));
const html5 = append(html4, node('blockquote', ''));
const html6 = append(html5, node('blockquote', 'quote'));

emptyTagsCount('blockquote', html6); // 2
*/
