import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';
import  {constructElements} from "../Elements";


const Span = styled.div`
  display:flex;
  border:1px solid rgba(0,0,0,0);
  flex-direction:column;
  align-content:center;
  background-color: ${props => props.isdragging ? 'rgba(255,128,0,0.5)' : 'rgba(0,0,0,0)'};
`;

const Div = styled.div`
  border:1px dotted ${props => props.isdragging ? 'red' : 'rgba(0,0,0,0)'};
`;


const colStyle= {
  width:"10vh",
  background:"rgba(0,0,0,0)",
  padding:0,
  display:"flex",
  alignContent:"center"

}

const conStyle = {
      height:"77vh",
      marginTop:"20px",
      borderImage: "url 50 round"
}

const rowStyle = {

    height:"100%",
    //background:"royalblue",
    //border:"1px solid black",

}


class Canvas extends Component {


  buildCanvas = (state) =>{
    const order = state.columnOrder
    var canvas = []
    const row = order.map((col,index) =>(
      <Col key={col+index} xs="12" sm="4" style={colStyle}>
      <Droppable droppableId={col}>
      {(provided,snap) => (
      <Span
      ref={provided.innerRef}
      {...provided.droppableProps}
      isdragging={snap.isDraggingOver}
      >
        {state.columns[col].taskIds.length>0 && state.columns[col].taskIds.map((c,index)=>{
          return (
            <Fragment key={c+index}>
            <Draggable
              draggableId = {c}
              index={index}
            >
            {(provided, snapshot) => (
            <Div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isdragging={snapshot.isDragging}
              >
            {constructElements(state.elements[c])}
            </Div>

            )}
            </Draggable>
            </Fragment>
          )
      })}
      {provided.placeholder}
      </Span>
      )}
      </Droppable>
      </Col>
    ))

    canvas.push(<Row key={"row"} style={rowStyle}>{row}</Row>)
    return canvas
  }

  render() {
    return (
      <Scrollbars style={{height:"79.6vh"}} autoHide autoHideTimeout={100}>
      <Container fluid={true} style={conStyle}>
        {this.buildCanvas(this.props.state)}
      </Container>
      </Scrollbars>
    );
  }

}

export default Canvas;
