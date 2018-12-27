import React from 'react';
import me from './img/me.jpg';
import './Inicio.css';

class Inicio extends React.Component{

    render(){
        return (
          <div>
              <img id="profilepic" alt="Foto de perfil de Rafael Lopes Schneider" src={me}></img>
              <h1>Rafael Lopes Schneider</h1>
              <h3>Estudante de Engenharia de Computacao</h3>
          </div>  
        );
    }

}

export default Inicio;