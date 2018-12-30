import React from 'react';
import './Item.css';
import file from './img/file.png';
import folder from './img/folder2.png';

class Item extends React.Component{

    itemClicked = () => {
        this.props.clickFunc(this.props.obj);
    }

    render () {
        let imgSRC = '';
        if (this.props.obj.back === true){
            return (
                <div onClick={this.itemClicked} className="itemContainer">
                    <img style={ { opacity: 0 } }className="itemIcon" alt="File" src={file}/>
                    <h6 className="itemName">..</h6>
                </div>
            );
        }
        if (this.props.obj.type === "file"){
            imgSRC = <img className="itemIcon" alt="File" src={file}/>;
        }
        else if (this.props.obj.type === "dir"){
            imgSRC = <img className="itemIcon" alt="Folder" src={folder}/>;
        }
        return (
            <div onClick={this.itemClicked} className="itemContainer">
                {imgSRC}
                <h6 className="itemName">{this.props.obj.name}</h6>
            </div>
        );
    }
}

export default Item;