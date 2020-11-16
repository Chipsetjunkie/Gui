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
    border:"1px solid black",
    justifyContent:"flex-end",
    width:"100px",
    height:"100px"
}

const Bin = styled.div`
  background-color: ${props => props.isdragging ? 'lightGreen' : 'white'};
  width:100%;
  height:100%;
  border:1px solid green;
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  display: flex;
  justify-content:center;
`;

const ItemContainer = styled.div`
  border: 1px solid lightgrey;
  border-radius: 50%;
  padding: 50px;
  background-color: ${props => props.isdragging ? 'lightGreen' : 'white'};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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
              bin
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
