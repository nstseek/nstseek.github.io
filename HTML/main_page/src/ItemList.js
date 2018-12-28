import React from 'react';
import './ItemList.css';
import Item from './Item.js';

class ItemList extends React.Component{

    createDirItem(obj){
        return <Item obj={obj}/>;
    }

    render(){
        console.log(this.props.dir);
        let dirItems;
        if (this.props.dir !== ''){
            dirItems = this.props.dir.map(this.createDirItem);
            console.log("dirItems", dirItems);
        }



        return (
            <div id="dirContainer" >
                {dirItems}
            </div>
        );
    }

}

export default ItemList;