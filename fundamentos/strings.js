const escola = "Cod3r";

console.log(escola.charAt(4)); // eu pego a letra da 4ª posição da string.
console.log(escola.charCodeAt(3)); // eu pego o valor do 3º caractere na minha string e retorno o valor dele da tabela ASC||.
console.log(escola.indexOf("3")); // eu pego a posição do meu caractere 3 na minha string.

console.log(escola.substring(1)); // eu pego minha string depois do caractere da primeira posição.
console.log(escola.substring(0, 3)); // eu pego minha string da primeira posição até a terceira.

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");
console.log(escola.replace(3, "e")); // substituo o valor 3 da minha string pelo caractere 'e'
console.log(escola.replace(/\d/, "e")); // substituo todos os digitos dentro do texto pela letra 'e'
console.log(escola.replace(/\w/g, "e")); // substituo todas letras e digitos dentro do texto pela letra 'e'

console.log("Ana,Maria,Pedro".split(",")); //transformo minha string em um array.
