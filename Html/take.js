/*
Реализуйте и экспортируйте по умолчанию функцию take, которая возвращает список, 
состоящий из первых n (значение передается первым параметром) элементов исходного (переданного вторым параметром) списка.
Остальные детали работы функции демонстрирует нижеприведённый код:

take(3, l()); // ()
take(3, l(1, 2)); // (1, 2)
take(1, l(7, 2)); // (7)


*/

const take = (count, list) => {
  if (isEmpty(list) || count === 0) {
    return l();
  }

  return cons(head(list), take(count - 1, tail(list)));
};

export default take;
