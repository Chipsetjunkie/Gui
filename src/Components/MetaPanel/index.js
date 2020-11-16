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
      <FadeTransform in={!this.state.enter}
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

        <Scrollbars style={{height:"250px", width:"45%"}} autoHideTimeout={100} renderTrackVertical={props => <div {...props} className="track-vertical" style={{display:"none"}}/>} autoHide>
        <div id="childDiv">
        <Stagger in duration={100}>
        {Object.keys(this.props.state.activeElements).map((i,index) =>(
          <Fade key={index}>
          <div id="card">
            <div id="settings">
              <img src="settings.png" alt="s" width="14px" height="14px" onClick={e=> this.changeProperty(e,this.props.state.activeElements[i].id)}/>
              <img src="unlock.png" alt="e" width="14px" height="14px"/>
            </div>
            <div id="indicator">
              <p class="orange"></p>
              <p style={{paddingLeft:"10px", marginTop:"5px", fontSize:"12px"}}>{this.props.state.activeElements[i].name}</p>
            </div>
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
