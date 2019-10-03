console.log(soma(3, 4)); // com minha função declarada eu posso ultilizar ela a qualquer momento do meu código.

// function declaration
function soma(x, y) {
  return x + y;
}

// function expression
const sub = function(x, y) {
  return x - y;
};
console.log(sub(3, 4)); //com minha função anônima eu só poso usarela depois de declarada.

// named function expression
const mult = function mult(x, y) {
  return x * y;
};

console.log(mult(3, 4)); // com minha função nomeada eu só posso usar ela depois de declarada.
