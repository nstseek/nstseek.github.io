import React from 'react';
import './Contato.css';
import face from './img/face.png';
import insta from './img/insta.png';
import git from './img/git2.png';
import stack from './img/stack2.png';
import linked from './img/linkedin.png';
import lattes from './img/lattes.png';
import gmail from './img/gmail2.png';

class Contato extends React.Component{

    render(){
        return (
            <div id="contatoContainer">
                <div id="contatoTitle">
                    <h1 className="contato">Contato</h1>
                </div>                
                <div id="contatoContent">
                    <div className="contatoItem">
                        <h3 className="contato">Minhas redes sociais e email:</h3>
                        <span>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/rafael.scd"><img className="contato" src={face} alt="Facebook profile"></img></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nstseek/"><img className="contato" src={insta} alt="Instagram profile"></img></a>
                            <a target="_blank" rel="noopener noreferrer" href="mailto:rafael.rls70@gmail.com?Subject=Contato%20via%20site"><img className="contato" src={gmail} alt="Gmail"></img></a>
                        </span>
                    </div>
                    <div className="contatoItem">
                        <h3 className="contato">Meus curriculos:</h3>
                        <span>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rafael-lopes-schneider-139152165/"><img className="contato" src={linked} alt="LinkedIn Profile"></img></a>
                            <a target="_blank" rel="noopener noreferrer" href="http://lattes.cnpq.br/8432696370015594"><img className="contato" src={lattes} alt="Lattes curriculum"></img></a>
                        </span>
                    </div>
                    <div className="contatoItem">
                        <h3 className="contato">Perfis de desenvolvedor</h3>
                        <span>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/nstseek"><img className="contato" alt="GitHub profile" src={git}></img></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://stackexchange.com/users/13971300/rafael-lopes-schneider"><img className="contato" alt="StackExchange profile" src={stack}></img></a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contato;