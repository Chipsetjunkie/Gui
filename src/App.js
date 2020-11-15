import React, { Component } from 'react';
import Canvas from './Components/Canvas';
import Panel from './Components/Panel';
import Meta from './Components/MetaPanel';
import {initialState} from './Components/State';
import * as types from './Components/State/Types';
import { Container, Row, Col } from 'reactstrap';
import { DragDropContext } from 'react-beautiful-dnd';


const  elements = {
      "button": types.button,
      "input": types.input,
      "h": types.h,
      "p": types.p
    }


class App extends Component {

  state = initialState


  changeProperty = (id,prop,value) =>{
      this.setState(
        {...this.state,
          elements:{
            ...this.state.elements,
            [id]:{
              ...this.state.elements[id],
              property:{
                ...this.state.elements[id].property,
                [prop.toLowerCase()]:value
              }
            }}}
          )
    }


  rearrange = (task, task_2, source,dest,data) => {
    let target;
    if (source !== null) target = task.splice(parseInt(source),1)[0]
    else
    {
      target = data
    }
    if (task_2 ===null){
        task.splice(dest,0,target)
        return task
        }
    else{
      task_2.splice(dest,0,target)
      return [task,task_2]
    }
    }

  onDragEnd = prop =>{
      const {destination, source, draggableId } = prop;
      console.log(destination)
      console.log(source)
      console.log(draggableId)
      if (destination.droppableId === "Footer" || destination.droppableId === undefined) return;

      if (source.droppableId === "Footer"){
         const last_item = parseInt(Object.keys(this.state.elements).splice(-1)[0].split('-')[1])+1
         const e = {id:"elem-"+last_item, ...elements[draggableId]}
         const tasks = this.rearrange([...this.state.columns[destination.droppableId].taskIds], null, null, destination.index, "elem-"+last_item)

         this.setState({
           ...this.state,
           columns:{
             ...this.state.columns,
             [destination.droppableId]:{
               ...this.state.columns[destination.droppableId],
               taskIds:tasks
             }
           },
           elements:{
             ...this.state.elements,
             ["elem-"+last_item]:e
           }
        })
      }
      else{
        if(destination.droppableId=== source.droppableId){
          const tasks = this.rearrange([...this.state.columns[destination.droppableId].taskIds],null, source.index, destination.index, null)
          this.setState({
            ...this.state,
            columns:{
              ...this.state.columns,
              [destination.droppableId]:{
                ...this.state.columns[destination.droppableId],
                taskIds:tasks
              }
            }})
        }
        else{
          const result = this.rearrange([...this.state.columns[source.droppableId].taskIds],[...this.state.columns[destination.droppableId].taskIds], source.index, destination.index, null)
          console.log("result", result)
          this.setState({
            ...this.state,
            columns:{
              ...this.state.columns,
              [source.droppableId]:{
                ...this.state.columns[source.droppableId],
                taskIds:result[0]
              },
              [destination.droppableId]:{
                ...this.state.columns[destination.droppableId],
                taskIds:result[1]
              }
            }
          })
         }
        }
       }

  render() {
    console.log(this.state)

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <Container
      fluid={true}>
      <Row>
          <Col sm="10"><Canvas state = {this.state}/></Col>
          <Col style={{display:"flex"}}><Meta state={this.state} changeProperty={this.changeProperty}/></Col>
      </Row>
      <Row>
          <Panel/>
      </Row>
      </Container>
      </DragDropContext>
    );
  }
}

export default App;
