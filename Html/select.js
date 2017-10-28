// BEGIN
const select = (tagName, html) => reduce((element, acc) => {
  const acc2 = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
  return is(tagName, element) ? consList(element, acc2) : acc2;
}, l(), html);

export default select;
// END

