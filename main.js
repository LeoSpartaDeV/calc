function calc(math, a, b) {
  if (math === 'div' && b == 0) {
    console.log('EROR cant divide by zero');
  }
  else if (typeof a !== 'number' || typeof b !== 'number' || typeof a === undefined || typeof b === undefined) {
    console.log('Введи правильное значение');
  }
  else if (math === 'min') {
    console.log(a - b);
  }
  else if (math === 'sum') {
    console.log(a + b);
  }
  else if (math === 'mult') {
    console.log(a * b);
  }
  else if (math === 'div') {
    console.log(a / b);
  }
  else if (math === 'dvr') {
    console.log(a ** b);
  }
  else if (math === 'sr') {
    console.log(a ** (1 / 2));
  }
  else {
    console.log('ERROR 404');
  }
 
}
calc('sum', 10, 5);
calc('min', 10, 5);
calc('mult', 10, 5);
calc('div', 10, 5);
calc('dvr', 10, 5);
calc('sr', 10, 5);

