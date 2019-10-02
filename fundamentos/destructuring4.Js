function rand([min = 0, max = 1000]) {
  //aqui eu troco os valores da variaveis caso o mínimo for maior que o maxímo.
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10]));
console.log(rand([,])); // aqui ele recebe o valor padrão que eu declarei na assinatura do método.
//console.log(rand()); Erro Null ou Undefined
