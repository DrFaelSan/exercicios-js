function tratarErroELancar(erro) {
  throw new Error(".....");
}

function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("Final");
  }
}

const obj = { nome: "Rafael" };
imprimirNome(obj);
