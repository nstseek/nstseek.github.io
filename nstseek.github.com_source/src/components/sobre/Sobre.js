import React from "react";
import "./Sobre.css";

class Sobre extends React.Component {
  render() {
    return (
      <div className="Sobre">
        <div id="sobreTitle">
          <h1>Sobre mim</h1>
        </div>
        <div id="sobreContent">
          <p className="sobreParagraph">
            Trabalho atualmente como desenvolvedor web full stack, utilizando
            Angular, Redux, Oracle Database, Java, RestAPIs e algumas outras
            coisas através de uma metodologia ágil, o Scrum, metodologia a qual
            possuo um certificado, com entregas contínuas ao cliente e reuniões
            frequentes entre o time.
          </p>
          <p className="sobreParagraph">
            Tenho certa experiência com React, Angular, Redux, Jest, Git,
            Node.js, Jenkins, NPM, PL/SQL, Oracle Database, PostgreSQL, HTML5,
            CSS3, SASS, montagem e manutenção de computadores, manutenção e
            instalação elétrica, eletrônica digital, VHDL, circuitos lógicos,
            administração de redes e sistemas Linux, automação com Arduino,
            C/C++, Swift e outras coisas.
          </p>
          <p className="sobreParagraph">
            Participei de varias competições de robótica por hobby, venci
            algumas delas inclusive, com prêmios por projeto mais promissor e
            melhor desempenho. Possuo inglês fluente e tenho vários cursos
            profissionalizantes, tanto presencial quanto pela Alura/Udemy.
            Dentre eles estão: Manutenção e montagem de redes e computadores;
            Design gráfico/web design; Front-end completo(React, Redux, Angular,
            RestAPIs, JavaScript/TypeScript, Bootstrap, CSS/HTML e HTTP); Linux;
            React Native; Swift, e outros.
          </p>
          <p className="sobreParagraph">
            Atualmente estou cursando Engenharia da Computação na Pontifícia
            Universidade Católica do Rio Grande do Sul, me encontro no 5
            semestre e possuo vários projetos em meu GitHub que demonstram
            alguns de meus conhecimentos, são projetos desenvolvidos durante
            minha aprendizagem que se encontram neste site.
          </p>
        </div>
      </div>
    );
  }
}

export default Sobre;
