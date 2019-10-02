//aqui eu pego os valores de duas variaveis do meu objeto na assinatura do método.
function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor); // aqui com Math floor ele arredonda para baixo.
}

const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log(rand({ min: 955 }));
console.log(rand({}));
