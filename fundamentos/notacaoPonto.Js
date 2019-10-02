console.log(Math.ceil(6.1)); // arredondar para cima

const obj1 = {};
obj1.nome = "Bola";
//obj1['nome'] = 'Bola2'
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome;
  this.exec = function() {
    console.log("Exec ....");
  };
}

//acessamos sempre os membros dos objetos através da notação ponto.

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();
