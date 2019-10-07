const moduloA = require("../../moduloA"); //linux o nome do arquivo é sensitive case.
console.log(moduloA.ateLogo);

const c = require("./pastaC/Index");
console.log(c.Ola2);

const http = require("http");
http
  .createServer((req, res) => {
    res.write("Bom dia!");
    res.end();
  })
  .listen(8080);
