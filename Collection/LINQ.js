constructor(colection, operations) {
	this.collection = collection;
	this.operations = operations || []; // если operation не будет то получим просто 	пустой массив
}

select(fn) {
	const newOps = this.operations.slice();// генерируем новый операйшен, что бы не 	менять текущий объект
	newOps.push(coll => coll.map(fn));// отложенные вычисления, код не выполняется
	return new Enumerable(this.collection, newOps);
}

