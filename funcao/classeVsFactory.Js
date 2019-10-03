class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("Rafael");
p1.falar();

const pessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  };
};

const p2 = pessoa("Rafael");
p2.falar();
