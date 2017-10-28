import { car, cdr/*, isPair*/, toString } from 'pair';

const reversePair = pair => cons(cdr(pair), car(pair));
