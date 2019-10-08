// npm i node-schedule@1.3.0 -E
const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 3 ** 2", function() {
  console.log("Executando Tarefa 1!", new Date().getSeconds());
});

setTimeout(function() {
  tarefa1.cancel();
  console.log("Cancelando Tarefa 1!");
}, 20000);

// setImmediate
// setInterval < = seta um intervalo do proprio JavaScript

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)]; // segunda a sexta
regra.hour = 12; // meio dia
regra.second = 30; // todo segundo igual a trinta.

const tarefa2 = schedule.scheduleJob(regra, function() {
  console.log("Executando Tarefa 2!", new Date().getSeconds());
});
