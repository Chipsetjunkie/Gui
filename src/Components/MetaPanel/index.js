import React, { Component } from 'react';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import Options from "./options";
import "./meta.css";


class Meta extends Component {
  state = {
    enter:true,
    data:{},
    type:"",
    id:null
  }

  changeProperty = (e,i) =>{
    this.setState({...this.state, enter:false, data:this.props.state.elements[i].property,
                        type:this.props.state.elements[i].type, id:this.props.state.elements[i].id})
  }

  closeProperty = (e) =>{
    this.setState({...this.state,enter:true, data:{}, type:""})
  }

  render() {
    const s = Object.entries(this.state)
    return (
      <div id="parentDiv">
      <FadeTransform in={!this.state.enter} duration={200}
        transformProps = {{exitTransform:"translateX(-50px)"}}
        fadeProps = {{exitOpacity:0}}>
      <div id="parent">
          <div>
            <span onClick={this.closeProperty}>x</span>
          </div>
            <div id="child">
                <Options property={this.state.data} type={this.state.type} id={this.state.id} changeProperty={this.props.changeProperty}/>
            </div>
      </div>
      </FadeTransform>
      <FadeTransform in={this.state.enter} duration={200}
        transformProps = {{exitTransform:"translateX(100px)"}}
        fadeProps = {{exitOpacity:0}}>
      <div id="childDiv">
        {this.props.state.activeElements.map((i,index) =>(
          <p key={index} style={{cursor:"pointer"}} onClick={e=> this.changeProperty(e,i)}>{i}</p>
        ))
        }
        </div>
      </FadeTransform>
      </div>
    );
  }

}


export default Meta;
//
// {s.length>0 && s.map((i,id)=>(
//   <p key={id+i[0]}> {i[0]} : {String(i[1])}</p>
// ))}
