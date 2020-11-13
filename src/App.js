import React, { Component } from 'react';
import Canvas from './Components/Canvas';
import Panel from './Components/Panel'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {

  render() {
    return (

      <Container fluid={true}>
      <Row>
      <Col sm="10">
      <Canvas/>
      </Col>
      <Col>
        Meta
      </Col>
      </Row>
      <Row>
      <Panel/>
      </Row>
      </Container>

    );
  }
}

export default App;
