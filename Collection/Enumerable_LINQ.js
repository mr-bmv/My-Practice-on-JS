  //Реализация ленивой версии
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  orderBy(fn, direction = 'asc') {
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      const compareResult = direction === 'asc' ? 1 : -1;

      if (a1 > b1) {
        return compareResult;
      } else if (a1 < b1) {
        return -compareResult;
      }

      return 0;
    };
    return this.build(coll => coll.sort(comparator));
  }

  where(fn) {
    return this.build(coll => coll.filter(fn));
  }

  toArray() {
    return this.operations.reduce((acc, func) => func(acc), this.collection);
  }
/*test

describe('HexletLinq', () => {
  let coll;
  let cars;

  beforeEach(() => {
    cars = [
      { brand: 'bmw', model: 'm5', year: 2014 },
      { brand: 'bmw', model: 'm4', year: 2013 },
      { brand: 'kia', model: 'sorento', year: 2014 },
      { brand: 'kia', model: 'rio', year: 2010 },
      { brand: 'kia', model: 'sportage', year: 2012 },
    ];
    coll = new Enumerable(cars);
  });

  it('select', () => {
    const result = coll.select(car => car.model);
    expect(result.collection).toEqual(coll.collection);
    expect(result.toArray()).toEqual(['m5', 'm4', 'sorento', 'rio', 'sportage']);
  });

  it('where', () => {
    const result = coll.where(car => car.year === 2014).select(car => car.brand);
    expect(result.collection).toEqual(coll.collection);
    expect(result.toArray()).toEqual(['bmw', 'kia']);
  });

  it('should be immutable', () => {
    coll.orderBy(car => car.year, 'asc').toArray();
    const result = coll.where(car => car.brand === 'kia')
      .where(car => car.year > 2011).select(car => car.model);

    expect(result.toArray()).toEqual(['sorento', 'sportage']);
  });

  it('should be immutable #2', () => {
    coll.orderBy(car => car.year, 'asc').toArray();
    const result = coll.where(car => car.brand === 'kia')
      .where(car => car.year > 2011).select(car => car.model);

    expect(result.toArray()).toEqual(['sorento', 'sportage']);
    coll.collection.push({ brand: 'kia', model: 'optima', year: 2013 });
    expect(result.toArray()).toEqual(['sorento', 'sportage']);
  });

});
*/
