
const diff = (firstAngle, secondAngle) => {

    const diff1 = firstAngle - secondAngle;
    const diff2 = secondAngle - firstAngle;

    const min = Math.abs(diff1) > Math.abs(diff2) ? Math.abs(diff2) : Math.abs(diff1);

    return diff360(min);

};

const diff360 = (number) => {

    const rest = number % 360;

    return 360 - rest > rest ? rest : 360 - rest;

};


console.log(`${diff(720, 45)} ** не 315, а 45, потому что 45 меньше`); // Не 315, а 45, потому что 45 меньше
console.log(`${diff(0, -180)} ** 180`);
console.log(`${diff(-360, 190)} ** не 190, а 170, потому что 170 меньше`); // Не 190, а 170, потому что 170 меньше
console.log(`${diff(840, 280)} ** 160 `);
