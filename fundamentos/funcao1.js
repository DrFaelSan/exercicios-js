// Função sem retorno

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3); // Aqui realiza a soma.
imprimirSoma(2); //NaN NOT A NUMBER.
imprimirSoma(2, 10, 4, 5, 6, 7, 8);
imprimirSoma(); // NaN NOT A NUMBER.

//Função com retorno
function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma()); //NaN NOT A NUMBER.
