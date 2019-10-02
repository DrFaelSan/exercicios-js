// novo recurso do ES2015

const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    longradouro: "Rua ABC",
    numero: 1000
  }
};

//aqui eu estou dazendo com que o programa me retorne esses 2 atributos da constante pessoa.
const { nome, idade } = pessoa;
console.log(nome, idade);

//aqui eu altero o nome das variaveis , É como os apelidos que tem em SQL
const { nome: n, idade: i } = pessoa;
console.log(n, i);

const {
  endereco: { longradouro, numero, cep }
} = pessoa;
//o valor de cep vem undefined pq não declaro nenhum valor para ela , mais posso inciar ela como null.
console.log(longradouro, numero, cep);
