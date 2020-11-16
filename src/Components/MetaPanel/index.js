import React, { Component } from 'react';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Scrollbars } from 'react-custom-scrollbars';
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
    this.setState({...this.state,enter:true, data:{}, type:"", id:null})
  }

  render() {
    return (
      <div id="parentDiv">
      {!this.state.enter?
      <FadeTransform in={!this.state.enter} duration={200}
        fadeProps = {{exitOpacity:0}}>
      <div id="parent">
          <div>
            <span onClick={this.closeProperty}>x</span>
          </div>
            <div id="child">
                <Options property={this.props.state.elements[this.state.id].property} type={this.state.type} id={this.state.id} changeProperty={this.props.changeProperty}/>
            </div>
      </div>
      </FadeTransform>:

        <Scrollbars style={{height:"250px", width:"40%"}} autoHideTimeout={100} renderTrackVertical={props => <div {...props} className="track-vertical" style={{display:"none"}}/>} autoHide>
        <div id="childDiv">
        <Stagger in duration={100}>
        {Object.keys(this.props.state.activeElements).map((i,index) =>(
          <Fade key={index}>
          <div  id="option-tab">
          <p style={{cursor:"pointer"}} onClick={e=> this.changeProperty(e,this.props.state.activeElements[i].id)}>{this.props.state.activeElements[i].name}</p>
          </div>
          </Fade>
        ))
        }
       </Stagger>
      </div>
      </Scrollbars>
      }
      </div>

    );
  }

}


export default Meta;
