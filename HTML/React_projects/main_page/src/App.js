import React from 'react';
import Sidebar from './Sidebar.js';
import Viewer from './Viewer.js';
import Inicio from './Inicio.js';
import Sobre from './Sobre.js';
import Projetos from './Projetos.js';
import Contato from './Contato.js';
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

  onSidebarClick = (event) => {
    let clickedItem = event.target.innerHTML
    if ( clickedItem === this.state.actualItem ) {
      return;
    }
    if (clickedItem === "Início"){
      this.setState( { 
        actualItem: "Início",
        componentToBeDisplayed: <Inicio/> 
      } );
    }
    else if (clickedItem === "Sobre mim"){
      this.setState( { 
        actualItem: "Sobre mim",
        componentToBeDisplayed: <Sobre/> 
      } );
    }
    else if (clickedItem === "Projetos"){
      this.setState( { 
        actualItem: "Projetos",
        componentToBeDisplayed: <Projetos/> 
      } );
    }
    else if (clickedItem === "Contato"){
      this.setState( { 
        actualItem: "Contato",
        componentToBeDisplayed: <Contato/> 
      } );
    }
    
  }
  
  componentDidMount(){
		document.querySelector(".sidebar").style.opacity = 1;
  }
  
}

export default App;
