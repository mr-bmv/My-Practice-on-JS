import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail } from 'hexlet-pairs-data'; // eslint-disable-line
import { attach, typeTag, contents } from './type'; // eslint-disable-line

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  const currentType = typeTag(obj); // определяем какой у нас тип карты: простой или процентный  
  const iter = (elements) => {
    if (isEmpty(elements)) {
      return null;
    }
    const element = head(elements);
    if (currentType === typeTag(element)) {
      const method = contents(element);
      if (methodName === car(method)) {
        return cdr(method);
      }
    }

    return iter(tail(elements));
  };

  return iter(methods); // задан выше как пустой лист

  // END
};

export const definer = type =>  // внести данные в таблицу
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
  };

