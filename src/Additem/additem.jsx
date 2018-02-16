import React, { Component } from 'react';
import '../App.css';
import Displayitem from '../Displayitem/displayitem';

class Additem extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[]
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem(e){
        var itemArray = this.state.items;
        if(this.textInput.value){
            itemArray.unshift({
                text: this.textInput.value,
                key : Date.now()
            });
        }
        this.setState({items : itemArray});
        this.textInput.value = '';
        console.log(this.state.items)
    }
  render() {
    return (
      <div className="Additem">
        <input
            type ="text"
            placeholder = "Additem"
            ref = {(a) =>this.textInput = a }
        />
        <button onClick = {this.addItem}>Add</button>
        <Displayitem entries = {this.state.items}/>
      </div>
    );
  }
}

export default Additem;
