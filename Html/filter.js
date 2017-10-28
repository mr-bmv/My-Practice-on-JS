export const filter = (func, elements) => {
 if (isEmpty(elements)) {
 return l();
}

const current = head(elements);
const tailElements = tail(elements);

  if (func(current)) {  // если наша функция применима к данному элементу, дает правду true
   return cons(current, filter(func, tailElements)); // оставляем элемент и углубляемся
 } // если нет
 return filter(func, tailElements);  //пропускаем элемент и углубляемся
};


// пример использования
export const quotes = (elements) => {
  const filtered = filter(element => is('blockquote', element), elements);
  // если так оставить то выдаст
  // "(pair: (blockquote, i am sexy, and i know it), pair: (blockquote, live is live))"
  // т.е. мы имеем составную чать из name + value = node
  // и нам нужно вытащить отсюда value
  const result = map(value, filtered);
  // не value(filtred), так как второй аргумет и будет указывать к чему функция
  return result;
};
/*
html-tags.js
Реализуйте и экспортируйте функцию filter для библиотеки html-tags, используя итеративный процесс:

import { node, append, make, filter, toString as htmlToString } from 'hexlet-html-tags';

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

const processedHtml = filter((element) =>
  !is('h1', element), html3);

//<p>content</p>
htmlToString(processedHtml);
Реализуйте и экспортируйте функцию quotes, которая извлекает из html тексты цитат и возвращает список цитат.

import { toString as pairToString } from 'hexlet-pairs-data';
import { make, append, node } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const dom4 = append(dom3, node('blockquote', 'live is live'));
const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));

pairToString(quotes(dom5)); // ('i am sexy, and i know it', 'live is live');
*/
