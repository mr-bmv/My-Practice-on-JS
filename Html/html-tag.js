// eslint-disable-next-line
import { cons, car, cdr/*, toString as pairToString*/ } from 'pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from '';

// BEGIN (write your solution here)
export const make = () => l();
export const append = (dom, element) => consList(element, dom);

export const node = (tag, content) => cons(tag, content);

export const name = element => car(element);
export const value = element => cdr(element);

export const toString = (stroka) => { // () ,( p , text-text)
  if (isEmpty(stroka)) {
    return '';
  }

  const element = head(stroka); //
  const tag = name(element);

  return `${toString(tail(stroka))}<${tag}>${value(element)}</${tag}>`;
};


// END

/*
html-tags.js
Реализуйте базовый интерфейс для создания html. Он включает в себя следующие
функции:

make - конструктор
node - создает новый тег. Содержит два элемента, имя тега и его содержимое.
 Дополнительно реализуйте селекторы тега: name и value
append - добавляет элемент (тег) в html-список
toString - возвращает текстовое представление html
Пример использования этого интерфейса:

import { make, append, toString, node } from './html-tags';

const dom1 = make();

const dom2 = append(dom1, node('h1', 'hello, world'));
const dom3 = append(dom2, node('h2', 'header2'));

const tag = node('h3', 'header3');
const dom = append(dom3, tag);

toString(dom);
// <h1>hello, world</h1><h2>header2</h2><h3>header3</h3>

// Пример без создания промежуточных переменных
toString(append(make(), node('p', 'this is Sparta!')));
// <p>this is Sparta!</p>
Экспортируйте все созданные функции.
*/
