console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function() {
  return this.split("")
    .reverse()
    .join("");
};

console.log("Rafael Vieira Desenvolvedor".reverse());

Array.prototype.first = function() {
  return this[0];
};

console.log([1, 2, 3, 4, 5].first());
console.log(["a", "b", "c"].first());

String.prototype.toString = function() {
  return "Lascou tudo"; // Não substituir métodos que já está estabelecido como padrão da linguagem.
};

console.log("Escola Cod3r".reverse());
