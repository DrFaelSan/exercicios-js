//  Object.preventExtensions = eu consigo alterar atributos do meu objeto , mais não posso declarar mais atributos , somente excluir.
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção"
});
console.log("Extensível:", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

// Object.seal = consigo alterar atributos  , porém não consigo nem deletar e nem adicionar atributos.
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valores constantes.
