export const b2p = (elements) => {
if (isEmpty(elements)) {
return l();
}

const element = head(elements);
let newElement;
if (is('blockquote', element)) {
newELement = node('p', value(element));
} else {
newElement = element;
}

return cons (newElement, b2p(tail(elements)));
