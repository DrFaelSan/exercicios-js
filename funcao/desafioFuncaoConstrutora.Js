function Pessoa(nome) {
  this.nome;

  this.falar = function() {
    console.log(`Meu nome é ${nome}`);
  };
}

const p1 = new Pessoa("Rafael");
p1.falar();
