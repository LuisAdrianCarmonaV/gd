import React, { useState } from "react";

function forms() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  function procesarDatos(event) {
    event.preventDefault();

    console.log("Nombre:", nombre);
    console.log("Email", email);
    console.log("Mensaje", mensaje);
    //alert(nombre);

    /*

1) Consultar una BD, y regresar los datos.
2) Consultar una API
3) Agregar la ingformación a la BD


*/
  }
  return (
    <div>
      <h1>Forms</h1>

      <form onSubmit={procesarDatos}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />

        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <label>Mensaje:</label>
        <input
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default forms;
