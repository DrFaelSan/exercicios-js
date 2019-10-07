const nums = [1, 2, 3, 4, 5];

//For com propósito
let resultado = nums.map(function(e) {
  return e * 2;
});

console.log(resultado);

//o map não altera o map atual ele gera um novo array.

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e =>
  `R$ ${parseFloat(e)
    .toFixed(2)
    .replace(".", ",")}`;

resultado = nums
  .map(triplo)
  .map(soma10)
  .map(paraDinheiro);

console.log(resultado);
