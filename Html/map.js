// принемает функцию и списое
// на основании функуии делает изменения в списке

import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings'; // eslint-disable-line

const map = (func, elements) => {

if(isEmpty(elements)) {
return l();
}

const newElement = func(head(elements));
return cons(newElement, map(func, tail(elements)));

};

export const map = (func, elements) => {
  const iter = (elements, acc) => {

  if (isEmpty(elements)) {
    return reverse(acc);
  }

  return iter(tail(elements), cons(func(head(elements)), acc));
  }
  return iter(elements, l());
};



export const mirror = elements =>
  map(element => node(name(element), reverseStr(value(element))), elements);
/*
html-tags.js
Реализуйте функцию map для библиотеки html-tags. Реализация должна быть
рекурсивной с использованием итеративного процесса.

import { make, append, node, value, is } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

const processedDom = map((element) => {
  if (is('h1', element)) {
    return node('h2', value(element));
  }
  return element;
}, dom3);
Реализуйте функцию mirror, которая переворачивает содержимое тегов, так чтобы читать его нужно было справа налево, а не слева направо.

import { make, append, node, value, is, toString as htmlToString } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

// <h1>emehcs</h1>
// <p>psil a si</p>
htmlToString(mirror(dom3));
Экспортируйте все созданные функции.


*/
