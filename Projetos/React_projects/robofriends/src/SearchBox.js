import React from 'react';

class SearchBox extends React.Component{
    render(){
        return (
            <div className="pa2">
                <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search for robots here"
                 onChange={this.props.eventFunc}></input>
            </div>
            
        )
    }
}

export default SearchBox;