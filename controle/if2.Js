function teste1(num) {
  if (num > 7) console.log(num);
  //esse console.log não faz parte da condição do meu IF
  console.log("Final");
}

teste1(6);
teste1(8);

function teste2(num) {
  if (num > 1); // cuidado com o ";", não usar com as estruturas de controle.
  console.log(num);
}

teste2(6);
teste2(8);
