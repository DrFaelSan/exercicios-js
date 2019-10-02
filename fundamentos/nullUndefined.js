let valor; // não inicializada

console.log(valor); //Undefined

valor = null; // ausência de valor.
console.log(valor); //não aponta pra nenhum endereço de memória.
// console.log(valor.tostring());  ERRO !

/*
quando eu quiser zerar o valor de uma variavel não posso deixar 
Undefined por questões de boas praticas deixar a variavel nula.
*/

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);
