import React, { Component } from 'react';
import Canvas from './Components/Canvas';
import Panel from './Components/Panel'
import { Container, Row, Col } from 'reactstrap';
import { DragDropContext } from 'react-beautiful-dnd';


class App extends Component {

  onDragEnd = props =>{
      const {destination, source, draggableId } = props;
      console.log(destination)
      console.log(source)
      console.log(draggableId)
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <Container
      fluid={true}>
      <Row>
          <Col sm="10"><Canvas/></Col>
          <Col>Meta</Col>
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
