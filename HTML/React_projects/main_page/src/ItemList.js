import React from "react";
import "./ItemList.css";
import Item from "./Item.js";

class ItemList extends React.Component {
  createDirItem = (obj, index) => {
    return <Item key={index} clickFunc={this.props.clickFunc} obj={obj} />;
  };

  render() {
    this.id = -1;
    let dirItems = this.props.dir.empty_element;
    if (this.props.dir.empty !== true) {
      dirItems = this.props.dir.map(this.createDirItem);
    }

    return (
      <div id="dirContainer">
        <Item clickFunc={this.props.clickFunc} obj={{ back: true }} />
        {dirItems}
      </div>
    );
  }
}

export default ItemList;
