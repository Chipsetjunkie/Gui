import React, { Component } from 'react';


class Options extends Component {


  changeOptions=(e,id)=>{
    this.props.changeProperty(id,e.target.name,e.target.value)
  }


  displayOptions =(p, id)=>{
        const common = ["Width", "Height", "Position", "Margin", "Padding", "Top", "Down", "Left", "Right"];
        return common.map((c,index) =>(
          <p key={index}>{c}
          <input type="text" name={c} value={p[c.toLowerCase()]} onChange={e=>this.changeOptions(e,id)}/>
          </p>
        ))
        }


  render() {
    return(
      <div>
        {this.displayOptions(this.props.property, this.props.id)}
      </div>
    )
  }

}

export default Options;
