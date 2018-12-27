import React from 'react';
import './Contato.css';
import face from './img/face.png';
import insta from './img/insta.jpeg';
import git from './img/git.png';
import stack from './img/stack.png';
import linked from './img/linkedin.png';
import lattes from './img/lattes.jpg';
import gmail from './img/gmail.png';

class Contato extends React.Component{

    render(){
        return (
            <div>
                <h1 className="contato">Contato</h1>
                <h5 className="contato">Minhas redes sociais e email:</h5>
                <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/rafael.scd"><img className="contato" src={face} alt="Facebook profile"></img></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nstseek/"><img className="contato" src={insta} alt="Instagram profile"></img></a>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:rafael.rls70@gmail.com?Subject=Contato%20via%20site"><img className="contato" src={gmail} alt="Gmail"></img></a>
                </span>
                <h5 className="contato">Meus curriculos:</h5>
                <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rafael-lopes-schneider-139152165/"><img className="contato" src={linked} alt="LinkedIn Profile"></img></a>
                    <a target="_blank" rel="noopener noreferrer" href="http://lattes.cnpq.br/8432696370015594"><img className="contato" src={lattes} alt="Lattes curriculum"></img></a>
                </span>
                <h5 className="contato">Perfis de desenvolvedor</h5>
                <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/nstseek"><img className="contato" alt="GitHub profile" src={git}></img></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://stackexchange.com/users/13971300/rafael-lopes-schneider"><img className="contato" alt="StackExchange profile" src={stack}></img></a>
                </span>
            </div>
        );
    }

}

export default Contato;