import { l, filter, toString } from 'hexlet-pairs-data';
import {node, append, make} from

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
cosnt html3 = append(html2, node('p','content'));



const processedHtml = removeHeaders(html3);

// <p>content</p>
toString(processedHtml);

// аналог записи
const processedHtml = filter(element => !is('h2', element), html3);



const list = l('', 0, 10, 'go go', -5, 'string');
const list2 = filter(Number.isInteger, list);
console.log(toString(list2));

const list3 = filter(item => typeof item === 'string', list);
console.log(toString(list3));

вовод на экран
(0, 10, -5)
(, go go, string)
undefined
