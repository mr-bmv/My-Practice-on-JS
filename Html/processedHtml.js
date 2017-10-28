import {node, append, make, map} from '';

const bq1 = node('blockquote', 'quote');
const bq2 = node('blockquote', 'another quote');
const processedHtml = map (element => {
if (is('blockquote', element)) {
return node('p', value(element));
}
return element;
}, append(append(make(), bq1), bq2));

//<p>quote</p>
//<p>anouther quote</p>
toString(processedHtml);

###Пример
import { l, map, toString } from 'hexlet-pairs-data';

const list = l(4, 16, 64);
const list2 = map(Math.sqrt, list);
console.log(toString(list2));  // (2, 4 8)

const list3 = map(item => item + 5, list);
console.log(toString(list3)); //(9, 21, 69)
