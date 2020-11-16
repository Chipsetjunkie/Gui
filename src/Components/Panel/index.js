import React, { Component,Fragment } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';


const conStyle = {
  position:"relative",
  top:"6vh",
  width:"100%",
  display:"flex",
  justifyContent:"space-around"
}

const binStyle={
    justifyContent:"flex-end",
    width:"100px",
    height:"100px"
}

const Bin = styled.div`
  background-color: ${props => props.isdragging ? 'rgba(51,255,153,0.2)' : 'rgba(0,0,0,0)'};
  width:100%;
  height:100%;
`;

const TaskList = styled.div`
  padding: 8px;

  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'rgba(66, 111, 254, 0.1)' : 'rgba(0,0,0,0)')};
  display: flex;
  justify-content:center;
`;

const ItemContainer = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;
      margin:10px;
      width: 100px;
      height: 50px;
      border-radius: 10px;
      box-shadow: 0px 3px 20px -7px rgba(0,0,0,1) ;
      background:#191921;
      color:white;
`;


class Panel extends Component {

  displayPanelItems = () =>{
    const items = ['button', 'input', 'h', 'p']
    return items.map((item, index)=>(
        <Fragment key={index+item}>
        <Draggable
        draggableId = {item}
        index={index}
          >
        {(provided, snapshot) => (
          <ItemContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isdragging={snapshot.isDragging}
          >
            {item}
          </ItemContainer>
        )}
      </Draggable>
      </Fragment>
    ))
  }

  render() {
    return (

      <div style={conStyle} >
      <div></div>
          <Droppable
                droppableId={"Footer"}
                direction="horizontal"
              >
            {(provided, snapshot) =>
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.displayPanelItems()}
                {provided.placeholder}

              </TaskList>
            }
          </Droppable>
          <div style={binStyle}>
          <Droppable droppableId={"Bin"}>
          {(provided, snapshot) =>
            <Bin
            ref={provided.innerRef}
            {...provided.droppableProps}
            isdragging={snapshot.isDraggingOver}>
              <img src="bin.png" alt="trash" width="100px" height="100px"/>
              {provided.placeholder}
            </Bin>
          }
          </Droppable>
          </div>
        </div>


    );
  }

}

export default Panel;
