import React from "react";
import Robofriends from "../../img/robofriends.png";
import Smartbrain from "../../img/smartbrain.png";
import Backgroundgenerator from "../../img/backgroundgenerator.png";
import Layoutmaster from "../../img/layoutmaster.png";
import Startupgrid from "../../img/startupgrid.png";
import Transitions1 from "../../img/transitions1.png";
import Transitions2 from "../../img/transitions2.png";
import Jsinputtest from "../../img/jsinputtest.png";
import Jsprompttest from "../../img/jsprompttest.png";
import "./Paginas.css";

class Paginas extends React.Component {
  render() {
    return (
      <div className="Paginas">
        <div id="paginasTitle">
          <h1>Páginas</h1>
        </div>
        <div id="paginasContent">
          <br />
          <p>
            <h5>Páginas principais (mais elaboradas)</h5>
            <div className="scrollView">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nstseek.github.io/Pages/robofriends/"
              >
                <div className="cardContainer">
                  <img
                    src={Robofriends}
                    alt="Robofriends"
                    className="siteImg"
                  />
                  <span>Robofriends</span>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nstseek.github.io/Pages/smartbrain/"
              >
                <div className="cardContainer">
                  <img src={Smartbrain} alt="Smartbrain" className="siteImg" />
                  <span>Smartbrain</span>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nstseek.github.io/HTML/background_generator/"
              >
                <div className="cardContainer">
                  <img
                    src={Backgroundgenerator}
                    alt="Background Generator"
                    className="siteImg"
                  />
                  <span>Background Generator</span>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nstseek.github.io/HTML/layout_master/
"
              >
                <div className="cardContainer">
                  <img
                    src={Layoutmaster}
                    alt="Layout Master"
                    className="siteImg"
                  />
                  <span>Layout Master</span>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nstseek.github.io/HTML/startup_grid/"
              >
                <div className="cardContainer">
                  <img
                    src={Startupgrid}
                    alt="Startup Grid"
                    className="siteImg"
                  />
                  <span>Startup Grid</span>
                </div>
              </a>
            </div>
            <h5>Páginas secundárias (criadas apenas para testes)</h5>
            <div className="scrollView">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nstseek.github.io/HTML/transitions_at_the_same_time/"
              >
                <div className="cardContainer">
                  <img
                    src={Transitions1}
                    alt="Transitions 1"
                    className="siteImg"
                  />
                  <span>Transitions 1</span>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nstseek.github.io/HTML/transitions_one_after_another/"
              >
                <div className="cardContainer">
                  <img
                    src={Transitions2}
                    alt="Transitions 2"
                    className="siteImg"
                  />
                  <span>Transitions 2</span>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nstseek.github.io/HTML/js_class_dom_test_input/
"
              >
                <div className="cardContainer">
                  <img
                    src={Jsinputtest}
                    alt="JS Input Test"
                    className="siteImg"
                  />
                  <span>JS Input Test</span>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nstseek.github.io/HTML/js_class_dom_test_prompt/
"
              >
                <div className="cardContainer">
                  <img
                    src={Jsprompttest}
                    alt="JS Prompt Test"
                    className="siteImg"
                  />
                  <span>JS Prompt Test</span>
                </div>
              </a>
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default Paginas;
