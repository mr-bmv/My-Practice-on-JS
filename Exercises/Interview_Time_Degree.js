const timeDeg = (x, y) =>{
  const  min = 6 * y;   
  const persentMin = min * 100 / 360;
  const hours = 30 * persentMin / 100;
  const startH = 30 * x;
  const sumH = startH + hours;
  const dev = sumH - min;
  return dev%360;
}

timeDeg(13, 0)
