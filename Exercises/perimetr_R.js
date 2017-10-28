//import { summa } from './summa_R';
import summa from './summa_R';

const perimetr = (a, b) => {
  const prm = 2 * summa(a, b); 
  console.log(`вывод периметра ${prm}`);
  return prm;
};

perimetr(3, 5);

