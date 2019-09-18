import React from 'react';
import './App.css';
import SearchBox from './SearchBox.js.js';
import CardList from './CardList.js.js';
import robots from './robots.js.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      objList: robots,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });

  }

  render() {
    const filteredElements = this.state.objList.filter( (string) => {
      return string.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox eventFunc={this.onSearchChange}/>
        <hr/>
        <CardList arrayObjs={filteredElements}/>
      </div>
    );
  }
}

export default App;
