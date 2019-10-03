let dobro = function(a) {
  return 2 * a;
};

dobro = a => {
  return 2 * a;
}; //funcções aninimas com arrow.

dobro = a => 2 * a; // retorno implicito.
console.log(Math.PI);

let ola = function() {
  return "Olá";
};

ola = () => "Olá"; //forma padrão do javaScript.
ola = _ => "Olá"; // possui um param
console.log(ola());
