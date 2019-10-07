const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  }
};
console.log(JSON.stringify(obj));

console.log(
  JSON.parse(
    '{"Pautas":[{"NumPauta":1,"Descricao":"Contra Maconha","EleitoresPauta":[{"NomeEleitor":"Rafael","Matricula":1},{"NomeEleitor":"Matheus","Matricula":2},{"NomeEleitor":"Guilherme","Matricula":3},{"NomeEleitor":"Gabriel","Matricula":4}],"processo":{"Contra":false,"Afavor":false,"Eleitores":0},"Votacao":true,"Resultado":"APROVADA","PorcAfavor":60.0,"PorcContra":30.0},{"NumPauta":2,"Descricao":"Contra carne vergana","EleitoresPauta":[{"NomeEleitor":"Rafael","Matricula":1},{"NomeEleitor":"Matheus","Matricula":2},{"NomeEleitor":"Guilherme","Matricula":3},{"NomeEleitor":"Gabriel","Matricula":4},{"NomeEleitor":"Cavalo","Matricula":5}],"processo":{"Contra":false,"Afavor":false,"Eleitores":0},"Votacao":false,"Resultado":null,"PorcAfavor":0.0,"PorcContra":0.0},{"NumPauta":3,"Descricao":"Contra a PM","EleitoresPauta":[{"NomeEleitor":"Rafael","Matricula":1},{"NomeEleitor":"Matheus","Matricula":2},{"NomeEleitor":"Guilherme","Matricula":3}],"processo":{"Contra":false,"Afavor":false,"Eleitores":0},"Votacao":true,"Resultado":"APROVADA","PorcAfavor":66.666666666666671,"PorcContra":33.333333333333336}],"Eleitores":[{"NomeEleitor":"Rafael","Matricula":1},{"NomeEleitor":"Matheus","Matricula":2},{"NomeEleitor":"Guilherme","Matricula":3},{"NomeEleitor":"Gabriel","Matricula":4},{"NomeEleitor":"Cavalo","Matricula":5}]}'
  )
);
