import { cons } from 'hexlet-pairs';
import { l, length } from '';
import { make } from '';

const cards = l(cons('Нежный Топор Эльфа', () => 6));
const game = make(cards);
const log = game('John' , 'Ada');


assert.equal(length(log), 5);


// step ((health1, health2), message)

cosnt step1 = get(1, log);  // тоже самое
assert.equal(toString(car(step1)), '(10,10)');
cosnt step2 = get(2, log);
assert.equal(toString(car(step2)), '(10,4)');
cosnt step3 = get(3, log);
assert.equal(toString(car(step3)), '(4,4)');
cosnt step4 = get(4, log);
assert.equal(toString(car(step4)), '(4,-2)');
cosnt step5 = get(5, log);
assert.equal(toString(car(step5)), '(4,-2)');


import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if(health1 <= 0 || health2 <=0 ){
  return consList(cons(cons(health1, health2), 'GAME OVER!!!'), log);
}

if(order === 6){
  return consList(cons(health1, health2), 'GAME OVER!!!');
}
const card = random(cards);
const damage = cdr(card)();

const cardName = car(card);


const message = order % 2 === 1 ? `Игрок '${name1}' применил '${cardName}'
против '${name2}' и нанес урон '${damage}'`: `Игрок '${name2}'
применил '${cardName}'  против '${name1}' и нанес урон '${damage}'`;


const NewHealth1 =  order % 2 === 1 ? health1 : health1 - damage;
const NewHealth2 =  order % 2 === 0 ? health2 : health2 - damage;

const NewOrder = order + 1;

const logItem = consList(cons(cons(NewHealth1, NewHealth2), message), log);

  return iter(NewHealth1, name1, NewHealth2, name2, NewOrder, logItem);
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');  // log выдает ((10, 10), "Какой-то текст")
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem))); // при выводе на экран всё должно быть в обраном порядке так как используем iter и cons поднимаемся из глубины.
};

export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);
