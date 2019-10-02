const prod1 = {}; // um par de chaves representa um objeto e da mesma forma se fosse de conchetes [] seria um array.
prod1.nome = "Celular Ultra Mega"; // atributo nome é inserido no meu objeto dinamicamente.
prod1.preco = 1500.0;
prod1["Desconto Legal"] = 0.4; // evitar atributos com espaço.

console.log(prod1);

const prod2 = {
  nome: "Camisa polo",
  preco: 79.9
};

// ('{ "nome": "Camisa Polo", "preco": 79.90}');  json

console.log(prod2);
