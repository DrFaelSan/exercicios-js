// par nome/valor
const saudacao = "Opa"; // contexto léxico 1

function exec() {
  const saudacao = "Falaaa"; // contexto léxico 2
  return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: "Rafael",
  idade: 20,
  peso: 78,
  endereco: {
    longradouro: "Rua Muito Legal",
    numero: 123
  }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
