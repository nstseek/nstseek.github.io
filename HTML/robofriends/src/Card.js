import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render(){
        return (
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
                <img alt="Profile pic" src={`https://robohash.org/${this.props.id}lulzaodob`}></img>
                <div>
                    <h2>{this.props.name}</h2>
                    <h2>{this.props.email}</h2>
                </div>
            </div>
        );
    }
}

export default Card;