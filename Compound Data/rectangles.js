// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, /*toString as pointToString*/ } from 'point';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString} from 'pair';

// BEGIN (write your solution here)

export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const startPoint = Rectangle => car(Rectangle);

export const width = Rectangle => car(cdr(Rectangle));

export const height = Rectangle => cdr(cdr(Rectangle));

export const square = Rectangle => width(Rectangle) * height(Rectangle);

export const perimeter = Rectangle => 2 * (width(Rectangle) + height(Rectangle));

export const containsTheOrigin = (Rectangle) => {
  const point1 = startPoint(Rectangle);
  const quadrant1 = quadrant(point1);

  const point2 = makePoint(getX(point1) + width(Rectangle), getY(point1));
  const quadrant2 = quadrant(point2);

  const point3 = makePoint(getX(point2), getY(point1) - height(Rectangle));
  const quadrant3 = quadrant(point3);

  const point4 = makePoint(getX(point1), getY(point3));
  const quadrant4 = quadrant(point4);

  if (quadrant1 === 2 && quadrant2 === 1 && quadrant3 === 4 && quadrant4 === 3) {
    return true;
  }
  return false;
};


/*
Реализуйте абстракцию (набор функций) для работы с прямоугольниками, стороны
которого всегда параллельны осям. При такой постановке, достаточно знать только
 три параметра для однозначного задания прямоугольника на плоскости: координаты
  левой-верхней точки, ширину и высоту. Зная их, мы всегда можем построить
  прямоугольник одним единственным способом.

  |
4 |    точка   ширина
  |       *-------------
3 |       |            |
  |       |            | высота
2 |       |            |
  |       --------------
1 |
  |
  |---------------------------
0    1   2   3   4   5   6   7
Основной интерфейс:

makeRectangle (конструктор) - создает прямоугольник. Принимает параметры:
левую-верхнюю точку, ширину и высоту.
Селекторы startPoint, width и height
Вспомогательные функции для выполнения расчетов:

square - возвращает площадь прямоугольника (a * b).
perimeter - возвращает периметр прямоугольника (2 * (a + b)).
containsTheOrigin - проверяет, принадлежит ли центр координат прямоугольнику
 (не лежит на границе прямоугольника, а находится внутри). Чтобы в этом
 убедиться, достаточно проверить, что все точки прямоугольника лежат в разных
 квадрантах.
Так как это интерфейсные функции, то они должны быть экспортированы. Если этого
не сделать, система модулей js не даст ими воспользоваться.

// Создание прямоугольника:
// p - левая верхняя точка
// 4 - ширина
// 5 - высота
//
// p    4
// -----------
// |         |
// |         | 5
// |         |
// -----------
const p = makePoint(0, 1);
const rectangle = makeRectangle(p, 4, 5);

// Вычисление площади прямоугольника
square(rectangle); // 20;

perimeter(rectangle); // 18
containsTheOrigin(rectangle); // false

const rectangle02 = makeRectangle(makePoint(-4, 3), 5, 4);
containsTheOrigin(rectangle02); // true

containsTheOrigin(makeRectangle(makePoint(-4, 4), 5, 2)); // false
*/
