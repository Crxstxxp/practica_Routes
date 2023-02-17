import React from "react";
import BarraSuperior from "../components/BarraSuperior";

function Info() {
  return (
    <>
      <BarraSuperior />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h1>Metodo render</h1> <br></br>técnica para compartir código
              entre componentes en React utilizando una propiedad cuyo valor es
              una función.
            </div>
            <div className="col-3">
              <h1>Metodo strict mode</h1>
              <br></br> simplifica el modo en que el nombre de una variable es
              asignado a un variable particular en el código.
            </div>
            <div className="col-3">
              <h1>Metodo return </h1>
              <br></br>se emplea para salir de la secuencia de ejecución de las
              sentencias de un método y, opcionalmente, devolver un valor.
            </div>
          </div>
        </div>
    </>
  );
}

export default Info;
