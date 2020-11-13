import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {initialState} from '../State'
import  {constructElements} from "../Elements";
import { v4 as uuidv4 } from 'uuid';
import "./main.css"

const colStyle= {
  width:"10vh",
  background:"SlateBlue",
  border:"1px solid black",
  padding:0,
  display:"flex",
  justifyContent:"center",
  alignContent:"center"

}

const conStyle = {
      height:"79.6vh",
      marginTop:"20px",
      overflowY:"scroll",
      border:"1px solid black"
}

const rowStyle = {

    height:"100%",
    background:"royalblue",
    border:"1px solid black",

}

const spanStyle={
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center"
}

//<span style={spanStyle} id={count} onMouseEnter={(e)=>this.hover(e)} onMouseLeave={(e)=>this.leave(e)}>{count}</span>

class Canvas extends Component {
  state = initialState

  // hover = c =>{
  //   c.target.style['background'] = "orange";
  // }
  //
  // leave = c =>{
  //   c.target.style['background'] = "SlateBlue";
  // }



  buildCanvas = () =>{
    const order = this.state.columnOrder
    var canvas = []
    var row = []
    var count = 0
  for(var j=0; j<3; j++){
        //row.push(<Col key={uuidv4()} sm="4" style={colStyle}><span style={spanStyle} id={count} onClick={this.clickHandler}>{count}</span></Col>)
        row.push(<Col key={uuidv4()} sm="4" style={colStyle}>
        <span style={spanStyle} id={count} onClick={this.clickHandler}>
        {this.state.columns[order[count]].taskIds.length>0 && this.state.columns[order[count]].taskIds.map(c=>{
          return constructElements(this.state.elements[c])
          //: null
        })}
        </span>
        </Col>)
        count +=1;
    }
    canvas.push(<Row key={uuidv4()} style={rowStyle}>{row}</Row>)
    return canvas
  }

  render() {
    console.log(this.state)
    return (
      <Container fluid={true} style={conStyle}>
        {this.buildCanvas()}
      </Container>
    );
  }

}

export default Canvas;
