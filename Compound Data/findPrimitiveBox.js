import { car, cdr/*, isPair*/, toString } from 'pair';

const findPrimitiveBox = (pair) => {
  const first = car(pair);
  const last = cdr(pair);

  if (!isPair(first) && !isPair(last)) {
    return pair;
  }

  const next = isPair(first) ? first : last;
  return findPrimitiveBox(next);
};
