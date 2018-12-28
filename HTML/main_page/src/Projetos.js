import React from 'react';
import './Projetos.css';
import ItemList from './ItemList.js';

class Projetos extends React.Component{

    constructor() {
        super();
        this.state = {
            dirList: ''
        }        
    }

    render(){
        
        return (
            <div>
                <h1>Meus projetos</h1>
                <ItemList dir={this.state.dirList}/>
            </div>
        );
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/nstseek/nstseek.github.io/contents/HTML')
        .then( response => response.json() )
        .then( data => this.setState({
            dirList: data
        })
        );
        
    }

}

export default Projetos;