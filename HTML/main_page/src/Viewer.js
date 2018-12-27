import React from 'react';
import './Viewer.css';

class Viewer extends React.Component{
    render(){
        return (
            <div className="viewer">
                {this.props.itemToDisplay}
            </div>
        );    
    }
}

export default Viewer;