import React from 'react';
import Sidebar from './Sidebar.js';
import Viewer from './Viewer.js';
import Inicio from './Inicio.js';
import Sobre from './Sobre.js';
import Projetos from './Projetos.js';
import Contato from './Contato.js';
import Paginas from './Paginas.js';
import './App.css';
import './animate.css';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = { 
      actualItem: 'Início',
      componentToBeDisplayed: <Inicio/>
    };
  }

  render() {
    return (
      <div id="container" className="animated fadeIn">
        <div id="info">
          <h3 id="infoh3">Site em construção</h3>
        </div>
        <Sidebar storeMethod={this.onSidebarClick}/>
        <Viewer itemToDisplay={this.state.componentToBeDisplayed}/>
      </div>
      
    );
  }

  sidebarFX = (ms, title, element) => {
    let promise = new Promise( (resolve, reject) => {
      setTimeout(resolve, ms);
    });

    promise.then(() => {
      this.setState( { 
        actualItem: title,
        componentToBeDisplayed: element
      } );
      document.querySelector(".viewer").style.opacity = 1;
    });
  } 

  onSidebarClick = (event) => {
    let clickedItem = event.target.innerHTML
    
    let delay = 500;

    if ( clickedItem === this.state.actualItem ) {
      return;
    }

    if (clickedItem === "Início"){
      document.querySelector(".viewer").style.opacity = 0;
      this.sidebarFX(delay, "Início", <Inicio/>);
    }

    else if (clickedItem === "Sobre mim"){
      document.querySelector(".viewer").style.opacity = 0;
      this.sidebarFX(delay, "Sobre mim", <Sobre/>);
    }

    else if (clickedItem === "Projetos"){
      document.querySelector(".viewer").style.opacity = 0;
      this.sidebarFX(delay, "Projetos", <Projetos/>);
    }
    
    else if (clickedItem === "Contato"){
      document.querySelector(".viewer").style.opacity = 0;
      this.sidebarFX(delay, "Contato", <Contato/>);
    }

    else if (clickedItem === "Paginas"){
      document.querySelector(".viewer").style.opacity = 0;
      this.sidebarFX(delay, "Paginas", <Paginas/>);
    }
    
  }
  
  componentDidMount(){
		document.querySelector(".sidebar").style.opacity = 1;
  }
  
}

export default App;
