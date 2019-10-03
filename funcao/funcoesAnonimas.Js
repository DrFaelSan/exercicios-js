const soma = function(x, y) {
  return x + y;
}; // variavel que recebe uma função anônima

const imprimirResultado = function(a, b, operacao = soma) {
  console.log(operacao(a, b));
}; //uma função anônima que recebe uma função na assinatura do método.

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function(x, y) {
  return x - y;
}); //passando uma função anônima na assinatura de uma função
imprimirResultado(3, 4, (x, y) => x * y); // passando uma função anônima em uma fubção com arrow.

const pessoa = {
  falar: function() {
    console.log("Opa");
  }
}; //colocando uma função anônima em um objeto.

pessoa.falar();
