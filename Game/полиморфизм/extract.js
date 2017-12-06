const mapping = {
  img: t => getAttribute('src', t),
  a: t => getAttribute('href', t),
  link: t => getAttribute('href', t),

};
export default tags => map(tag => mapping[getName(tag)](tag), tags);



/*второй вариант решения
export default (tags) => {
  const tagUrlNames = {
    a: 'href',
    img: 'src',
    link: 'href',
  };
  return map(item => getAttribute(tagUrlNames[getName(item)], item), tags);
};
*/
