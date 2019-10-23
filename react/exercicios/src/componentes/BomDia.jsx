import React from "react";

export default props => [
  <h1 key="h1">Bom dia {props.nome}!</h1>,
  <h2 key="h2">Até breve!</h2>
];

// Melhor maneira de agrupar varios elementos dentro de um componente , é ultilizarmos uma div ou React Fragment
// export default props => (
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>
// );

// export default props => (
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>
// );
