import {l, isEmpty, is, head, tail, cons} from '';

export const removeHeaders = (elements) => {
 if (isEmpty(elements)){
 return l();
}

const element = head(elements);
const tailElements = tail(elements);
if ( is('h2', element)) {
 return removeHeaders(tailElements);
}
return cons(element, removeHeaders(tailElements));
