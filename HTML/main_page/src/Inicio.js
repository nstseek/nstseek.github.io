import React from 'react';
import me from './img/me.png';
import './Inicio.css';

class Inicio extends React.Component{

    render(){
        return (
          <div>
              <div id="imgcontainer">
                <img id="profilepic" alt="Foto de perfil de Rafael Lopes Schneider" src={me}></img>
              </div>
              <h1>Rafael Lopes Schneider</h1>
              <h3 id="inicioh3">Estudante de Engenharia de Computacao da PUC-RS</h3>
          </div>  
        );
    }

}

export default Inicio;