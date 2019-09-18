import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Viewer from "./containers/viewer/Viewer";
import Inicio from "./components/inicio/Inicio";
import Sobre from "./components/sobre/Sobre";
import Projetos from "./components/projetos/Projetos";
import Contato from "./components/contato/Contato";
import Paginas from "./components/paginas/Paginas";
import "./App.css";
import "./animate.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      actualItem: "Início",
      componentToBeDisplayed: <Inicio />
    };
  }

  render() {
    return (
      <div id="container" className="animated fadeIn">
        <div id="info">
          <h3 id="infoh3">Site em construção</h3>
        </div>
        <Sidebar storeMethod={this.onSidebarClick} />
        <Viewer itemToDisplay={this.state.componentToBeDisplayed} />
      </div>
    );
  }

  sidebarFX = (ms, title, element) => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });

    promise.then(() => {
      this.setState({
        actualItem: title,
        componentToBeDisplayed: element
      });
      document.querySelector(".viewer").style.opacity = 1;
    });
  };

  onSidebarClick = event => {
    let clickedItem = event.target.innerHTML;

    let delay = 500;

    if (clickedItem === this.state.actualItem) {
      return;
    }

    if (clickedItem === "Início") {
      document.querySelector(".viewer").style.opacity = 0;
      this.sidebarFX(delay, "Início", <Inicio />);
    } else if (clickedItem === "Sobre mim") {
      document.querySelector(".viewer").style.opacity = 0;
      this.sidebarFX(delay, "Sobre mim", <Sobre />);
    } else if (clickedItem === "Repositório") {
      document.querySelector(".viewer").style.opacity = 0;
      this.sidebarFX(delay, "Repositório", <Projetos />);
    } else if (clickedItem === "Contato") {
      document.querySelector(".viewer").style.opacity = 0;
      this.sidebarFX(delay, "Contato", <Contato />);
    } else if (clickedItem === "Páginas") {
      document.querySelector(".viewer").style.opacity = 0;
      this.sidebarFX(delay, "Páginas", <Paginas />);
    }
  };

  componentDidMount() {
    document.querySelector(".sidebar").style.opacity = 1;
  }
}

export default App;
