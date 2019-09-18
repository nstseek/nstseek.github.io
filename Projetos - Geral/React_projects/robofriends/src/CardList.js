import React from 'react';
import Card from './Card.js.js';

class CardList extends React.Component{
    
    createCard(user){
        return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>;
    }

    render(){
        const cardArray = this.props.arrayObjs.map(this.createCard);
                
        return (<div>
                    {cardArray}
                </div>);
    }
}

export default CardList;