function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado(local) da função
  let velocidadeAtual = 0; //let ou const torna meu método/variével privado(a)

  //métoo publico
  this.acelerar = function() {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  //metodopublico
  this.getVelocidadeAtual = function() {
    //this tora meu método/variável publica(o)
    return velocidadeAtual;
  };
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro); // carro é minha função construtora é como se fosse minha Classe em outras linguagens de Programação.
console.log(typeof ferrari); // a instância dessa minha função na minha variavél ferrari torna minha variavél um objeto.
