const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // elemento 4 não existe.

valores[4] = 10; // aqui eu adiciono um valor diretamente ne uma indice.
console.log(valores);
console.log(valores.length);

//push adiciona valores no array
valores.push({ id: 3 }, false, null, "teste"); // funciona mais não é certo.
console.log(valores);

console.log(valores.pop());
delete valores[0]; // aqui eu deleto um elemento do meu array mais funciona em objetos eu tiro atributos
console.log(valores);

console.log(typeof valores);
