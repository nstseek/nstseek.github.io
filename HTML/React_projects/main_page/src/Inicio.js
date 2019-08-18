import React from "react";
import me from "./img/me.png";
import "./Inicio.css";

class Inicio extends React.Component {
  render() {
    return (
      <div>
        <div id="imgcontainer">
          <img
            id="profilepic"
            alt="Foto de perfil de Rafael Lopes Schneider"
            src={me}
          />
        </div>
        <h1>Rafael Lopes Schneider</h1>
        <hr />
        <h3 id="inicioh3">
          Estudante de Engenharia de Computação na PUC-RS e Desenvolvedor Web na
          DBServer
        </h3>
      </div>
    );
  }
}

export default Inicio;
