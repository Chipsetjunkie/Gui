import React, { Component } from 'react';


class Options extends Component {


  changeOptions=(e,id)=>{
    this.props.changeProperty(id,e.target.name,e.target.value)
  }


  displayOptions =(p, id)=>{
        const common = ["Width", "Height", "Position", "Margin", "Padding", "Top", "Down", "Left", "Right"];
        return common.map((c,index) =>(
          <p key={index}>{c}
          <input type="text" name={c.toLowerCase()} value={p[c.toLowerCase()]} onChange={e=>this.changeOptions(e,id)}/>
          </p>
        ))
        }


  render() {
    return(
      <>
      <div>
        {this.displayOptions(this.props.property, this.props.id)}
      </div>
      <hr/>
      <div>
        {this.props.type=== "Button"?
          <>
          <p>Color
            <select name="color" id="colors" onChange={e=>this.changeOptions(e,this.props.id)}>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="success">Success</option>
            <option value="danger">Danger</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
            </select>
         </p>
         <p>Value
         <input name="value" value={this.props.property['value']} onChange={e=>this.changeOptions(e,this.props.id)} style={{width:"60%"}}></input>
         </p>
         </>
         :""
        }
        {this.props.type==="Input"?
        <>
        <p>Type
        <select name="type" id="input" onChange={e=>this.changeOptions(e,this.props.id)}>
          <option value="text">text</option>
          <option value="radio">radio</option>
          <option value="checkbox">checkbox</option>
        </select>
        </p>
        <p>Label
        <input name="label" value={this.props.property['label']} onChange={e=>this.changeOptions(e,this.props.id)} style={{width:"60%"}}></input>
        </p>
        </>
        :""
        }
        {this.props.type==="h"?
        <>
        <p>Tag
          <select name="tag" id="colors" onChange={e=>this.changeOptions(e,this.props.id)}>
            <option value="h1">h1</option>
            <option value="h2">h2</option>
            <option value="h3">h3</option>
            <option value="h4">h4</option>
            <option value="h5">h5</option>
            <option value="h6">h6</option>
          </select>
        </p>
        <p>Value
        <input name="value" value={this.props.property['value']} onChange={e=>this.changeOptions(e,this.props.id)} style={{width:"60%"}}></input>
        </p>
        </>
        :""
        }
        {this.props.type==="p"?
        <p>Value
        <input name="value" value={this.props.property['value']} onChange={e=>this.changeOptions(e,this.props.id)} style={{width:"60%"}}></input>
        </p>
        :""
        }
      </div>
      </>

    )
  }

}

export default Options;
