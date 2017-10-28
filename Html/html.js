import {make, append, toString, node} from '';

const html1 = make();
const html2 = append(html1, node('h1', 'hexlet')); // h1, hexlet ()
const p1 = node('p', 'hello, world');
const html3 = append(html2, p1); // p, hello world,

toString(html3);

// <h1> hexlet</h1>
// <p>hello, world</p>
