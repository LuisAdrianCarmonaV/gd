import React from "react";

function render() {
  //Simulación datos que vienen de la BDD.

  //let name = "Jorge"
  const nombre = ["Alberto", "Karen", "Omar", "Jessica"];

  return (
    <div>
      <h1>Renderizado de listas</h1>

      {nombre.map((elemento, index) => (
        <p>
          Elemento # {index} {elemento}
        </p>
      ))}
    </div>
  );
}

export default render;
