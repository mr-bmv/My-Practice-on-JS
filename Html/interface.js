/*
Реализуйте и экспортируйте функцию extractHeaders, которая извлекает все заголовки 
h2 из html и возвращает новый html, в котором заголовки заменены на p. Тело при этом остается тем же.

import { node, append, make, reduce, toString as htmlToString } from 'hexlet-html-tags';

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));

// <p>header1</p><p>header2</p>
htmlToString(extractHeaders(html3));
Реализуйте и экспортируйте функцию wordsCount, которая считает вхождения слова в определенный тег. Для подсчета слов в тексте одного тега воспользуйтесь вспомогательной функцией wc, которая уже импортирована в модуль html-tags.

import { make, append, node } from 'hexlet-html-tags';

const html1 = append(make(), node('h2', 'header1 lisp'));
const html2 = append(html1, node('p', 'content'));
const html3 = append(html2, node('h2', 'lisp header2 lisp'));
const html4 = append(html3, node('p', 'content lisp'));

wordsCount('h2', 'lisp', html4); // 3
Подсказки
Подсчет слов в тексте: wc(word, text), где word искомое слово, а text это текст, в котором ведется поиск.

wc('what', 'what, what, who, what'); // 3
wc('la', 'loli'); // 0
*/


// фильтрум весь html  по h2
const filterHTwo = (html) => filter( item => is('h2', item), html);

// map заменит всe h2 на p
export const extractHeaders = (elements) => map((element) => {
  if (is('h2', element)) {
    return node('p', value(element));
  }
  return element;
}, filterHTwo(elements)); // вызываем отфильтрованный список



// нужно отфильтровать список и оставить только с ТРЕБУЕМЫМ тегом
// используя wc посчитать слова

export const wordsCount = (tagName, word, elements) => {
  const filtered = filter(element => is(tagName, element), elements);   // фильтруем 
// тут нужен список, а не функция filter = ( tagName, elements) = filter(element => is(tagName, element), elements); 
// иначе ошибка Argument must be list, but it was
  const values = map(element => value(element), filtered);  // в отфильтрованном списке меняет (<h2>, text) на (text)
  const func = (values, acc) => wc(word, values) + acc;  // функция - считает слова в отфильтрованном тексте и суммирует с ответами
  return reduce(func, 0, values);   
};







