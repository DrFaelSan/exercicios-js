const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const feminino = funcionario => funcionario.genero === "F";
const chines = funcionario => funcionario.pais === "China";

const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then(response => {
  const funcionarios = response.data;
  //   console.log(funcionarios);

  const func = funcionarios
    .filter(feminino)
    .filter(chines)
    .reduce(menorSalario);

  console.log(func);
});
