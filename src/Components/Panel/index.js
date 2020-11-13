import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';



const rowStyle= {
    position:"relative",
    background:"SlateBlue",
    border:"1px solid black",
    top: "8vh",
    paddingLeft:"10%"
  }


const colStyle={
  padding:"2.7vh",
}

const conStyle={
  position:"relative",
  top:"2.3vh"
}

class Panel extends Component {

  render() {
    return (
      <Container style={conStyle}>
        <Row style={rowStyle}>
          <Col style={colStyle}>Button</Col>
          <Col style={colStyle}>Text</Col>
          <Col style={colStyle}>input</Col>
        </Row>
      </Container>
    );
  }

}

export default Panel;
