import { node, append, make} from '';

const html1 = make();
const html2 = append(html1, node('h1', 'scheme'));
const html3 = append(html2, node('p', 'is a lisp'));

const html4 = append(html3, node('h1', 'haskell'));
const html5 = append(html4, node('p', 'pure'));
cosnt html6 = append(html5, node('h2', 'php'));

headersCount('h1', html6) // 2

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};


reduce((element, acc) => {
return is('h1', item) ? acc + 1 : acc;
}, 0, html3); //2
