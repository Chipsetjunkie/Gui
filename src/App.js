import React, { Component } from 'react';
import Canvas from './Components/Canvas';
import Panel from './Components/Panel';
import Meta from './Components/MetaPanel';
import { Container, Row, Col } from 'reactstrap';
import { DragDropContext } from 'react-beautiful-dnd';
import { initialState } from './Components/State/';
import * as types from './Components/State/Types';
import "./App.css"

const  elements = {
      "button": types.button,
      "input": types.input,
      "h": types.h,
      "p": types.p
    }


class App extends Component {

  state = initialState

  componentDidMount(){
    localStorage.getItem('state')!==null &&
    this.setState(JSON.parse(localStorage.getItem('state')))
  }

  componentDidUpdate(){
     localStorage.setItem('state',JSON.stringify(this.state));
  }


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


   changeName = (id,value)=>{
     this.setState({
        ...this.state,
        activeElements:{
          ...this.state.activeElements,
          [id]:{
            ...this.state.activeElements[id],
            name:value
          }
        }

      })
   }

   lockItem = id =>{
     this.setState({
        ...this.state,
        activeElements:{
          ...this.state.activeElements,
          [id]:{
            ...this.state.activeElements[id],
            disable:!this.state.activeElements[id].disable
          }
        }})
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


 // disable = d =>{
 //   const data = this.state.columns[d.droppableId].taskIds
 //   const value = data[d.index]
 //   return this.state.activeElements[value].disable
 // }


  onDragEnd = prop =>{
      const {destination, source, draggableId } = prop;
      // console.log(destination)
      //  console.log(source)
      //  console.log(draggableId)
      if (destination===null || destination.droppableId === "Footer") return;

      //if(this.disable(destination)) return;

      if (destination.droppableId === "Bin"){
        var data = this.state.columns[source.droppableId].taskIds
        data = data.filter(i => i !== draggableId)
        const elem = {...this.state.elements}
        delete elem[draggableId]
        const active = {...this.state.activeElements}
        delete active[draggableId]
        this.setState(
              {...this.state,
                elements:elem,
                activeElements:active,
                columns:{
                  ...this.state.columns,
                  [source.droppableId]:{
                    ...this.state.columns[source.droppableId],
                    taskIds:data
                  }
                }

              })

        return;

      }
      // New element insertion

      if (source.droppableId === "Footer"){
         const last_item = Object.keys(this.state.elements).length>0?parseInt(Object.keys(this.state.elements).splice(-1)[0].split('-')[1])+1:0
         const e = {id:"elem-"+last_item, ...elements[draggableId]}
         const tasks = this.rearrange([...this.state.columns[destination.droppableId].taskIds], null, null, destination.index, "elem-"+last_item)
         const active = {...this.state.activeElements}
         active["elem-"+last_item]={id:"elem-"+last_item,name:draggableId,disable:false}
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
           },
           activeElements:active
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

        // Element rearrange

        else{
          const result = this.rearrange([...this.state.columns[source.droppableId].taskIds],[...this.state.columns[destination.droppableId].taskIds], source.index, destination.index, null)
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
    return (<>
      <DragDropContext onDragEnd={this.onDragEnd}>
      <Container
      fluid={true}>
      <Row>
          <Col sm="10"><Canvas state = {this.state}/></Col>
          <Col sm="2"style={{display:"flex"}}><Meta state={this.state} changeProperty={this.changeProperty} changeName={this.changeName} lockItem={this.lockItem}/></Col>
      </Row>
      <Row>
          <Panel state={this.state}/>
      </Row>
      </Container>
      </DragDropContext>
      </>
    );
  }
}

export default App;
