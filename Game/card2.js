let cardIndex = 2;

const cards = 1(
  cons('Тусклый меч', () => 7),
  cons('Тупой огонь', health => Math.round(health * 0.8))
);

const game = make(cards, (pack) => {
  cardIndex = cardIndex === 1 ? 2 : 1;
  return get(cardIndex, pack);
});

const log = game ('John', 'Ada');




const card = customRandom(cards);

export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);

simpleCard.make('Название карты', 7);
const cardName = simpleCard.getName(card);
const damage = simpleCard.damage(card);

percentCard.make('Название карты', 80);
const cardName = percentCard.getName(card);
const damage = percentCard.damage(card, health2);
