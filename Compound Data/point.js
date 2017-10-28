import {cons, car, cdr, toString } from 'pair';

export const makePoint = (a, b) => cons(a, b);

export const getX = (point) => car(point);

export const getY = (point) => cdr(point);

export const quadrant = (point) => {
  if ( getX(point) > 0 && getY(point) > 0){
    return 1;
  } else if ( getX(point) <0 && getY(point) >0){
    return 2;
  } else if ( getX(point) <0 && getY(point) < 0){
    return 3;
  } else if ( getX(point) > 0 && getY(point) < 0){
    return 4;
  } else {
    return null;
  }
};

export const symmetricalPoint = (point) => makePoint(-getX(point), -getY(point));

export const distance = (point1, point2) => Math.sqrt(Math.pow((getX(point2) - getX(point1)),2) + Math.pow((getY(point2) - getY(point1)),2));

/*
Реализуйте и экспортируйте следующие функции для работы с точками:

quadrant - функция, которая вычисляет квадрант, в котором находится точка.
Ниже приведена схема, показывающая номера квадрантов на плоскости.
        +
      2 | 1
        |
+----------------+
        |
      3 | 4
        +
const point = makePoint(1, 5);
quadrant(point); // 1
quadrant(makePoint(3, -3)); // 4
Если точка не принадлежит ни одному квадранту (т.е., если она лежит хотя бы на
 одной из осей координат), то функция должна возвращать null:

const point = makePoint(0, 7);
quadrant(point); // null
quadrant(makePoint(2, 0)); // null
symmetricalPoint - функция, возвращающая новую точку, симметричную относительно
начала координат. Такая симметричность означает, что меняются знаки у x и y.
symmetricalPoint(makePoint(1, 5)); // makePoint(-1, -5)
distance - функция, вычисляющая расстояние между точками по формуле:
d = sqrt((x2−x1)^2+(y2−y1)^2)
distance(makePoint(-2, -3), makePoint(-4, 4)); // ≈ 7.28
*/
