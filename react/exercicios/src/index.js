import React from "react";
import ReactDOM from "react-dom";

//todo componente criado por mim deve ser declarado com letra maiuscula "P"rimeiro.
// import Primeiro from "./componentes/Primeiro";
// ReactDOM.render(<Primeiro />, document.getElementById("root"));

// import BomDia from "./componentes/BomDia";

// ReactDOM.render(<BomDia nome="Rafael" />, document.getElementById("root"));

// import { BoaTarde, BoaNoite } from "./componentes/Multiplos";

// ReactDOM.render(
//   <div>
//     <BoaTarde nome="Rafael" />
//     <BoaNoite nome="Rafael" />
//   </div>,
//   document.getElementById("root")
// );

// import Multi from "./componentes/Multiplos";

// ReactDOM.render(
//   <div>
//     <Multi.BoaTarde nome="Rafael" />
//     <Multi.BoaNoite nome="Rafael" />
//   </div>,
//   document.getElementById("root")
// );

// import Saudacao from "./componentes/Saudacao";

// ReactDOM.render(
//   <div>
//     <Saudacao tipo="Bom dia" nome="Rafael" />
//   </div>,
//   document.getElementById("root")
// );

import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" sobrenome="Silva" />
      <Filho nome="Paulo" sobrenome="Silva" />
      <Filho nome="Carla" sobrenome="Silva" />
    </Pai>
  </div>,
  document.getElementById("root")
);
