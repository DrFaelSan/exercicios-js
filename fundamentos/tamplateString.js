const nome = "Rebeca";
const concatenacao = "Olá" + nome + "!"; // concatenação comum.

const tamplate = `
    Olá
    ${nome}`;
console.log(concatenacao, tamplate);

//expressões...
console.log(`1 + 1 = ${1 + 1}`); // tamplate string.

const up = texto => texto.toUpperCase();
console.log(`Ei...${up("cuidado")}!`);
